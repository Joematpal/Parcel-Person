import template from './login.html'
import { remote } from 'electron'
// import fs from 'fs'
const refUrl = 'http://localhost:5050';

export default {
  template,
  controller(mainFctry, $http){
    this.login = login;
    this.user = {
      name:'login'
    }

    function login(){

      const BrowserWindow = remote.BrowserWindow;

      var win = new BrowserWindow({ width: 800, height: 600 });
      win.loadURL(`${refUrl}/auth/google`);

      mainFctry.login().then(function(results){
        mainFctry.user = results.data;
        console.log(mainFctry.user)
      })

    }
  }
}
