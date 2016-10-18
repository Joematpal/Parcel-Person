import { app, BrowserWindow } from 'electron'
import electronOauth2 from 'electron-oauth2'
import configFile from './config/config'
import jwtDecode from 'jwt-decode'

let win

function createWindow( event ) {
  win = new BrowserWindow({width: 1000, height: 800})

  win.loadURL(`file://${__dirname}/index.html`)

  win.webContents.openDevTools()

  win.on('closed', () => {
    win = null

  })

  console.log(event.preventDefault())

}

app.on('ready', createWindow)

app.on('window-all-closed', () =>{
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', (event)=>{
  if (win === null){
    createWindow()

    console.log('event', event)
  }
})

var config = {
    clientId: configFile.client_id,
    clientSecret: configFile.client_secret,
    authorizationUrl: configFile.auth_uri,
    tokenUrl: configFile.token_uri,
    useBasicAuthorizationHeader: false,
    redirectUri: configFile.redirect_uris
};

app.on('ready', () => {
  const windowParams = {
    alwaysOnTop: true,
    autoHideMenuBar: true,
    webPreferences: {
        nodeIntegration: false
    }
  }

  const options = {
    scope: 'https://www.googleapis.com/auth/userinfo.email',
    accessType: 'online'
  };

  const myApiOauth = electronOauth2(config, windowParams);

  myApiOauth.getAccessToken(options)
    .then(token => {
      // use your token.access_token
      let decodedToken = jwtDecode(token.id_token)
      console.log(decodedToken)

      myApiOauth.refreshToken(token.refresh_token)
        .then(newToken => {
          //use your new token
          decodedToken = jwtDecode(newToken.id_token)
        });
    });
});
