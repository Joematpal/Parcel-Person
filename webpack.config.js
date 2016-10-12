module.exports = {
  entry: ['./src/app.js'],
  module:{
    loaders: [
      {
        test:/\.js/
        , esclude:/node_modules/
        , loader: "babel"
      }
      ,{
        test: /\.css/
        , exlude: /node_modules/
        , loader: "style!css"
      }
      ,{
         test: /\.html$/
         , loader:'html'
      }
      ,{
        test: /\.scss$/
        , loader:['style', 'css', 'scss']
      }
    ]
  }
  , resolve: {
    extensions: ["", ".js", ".css"]
  }
  , output: {
    path:__dirname + '/src'
    , filename: 'bundle.js'
  }
}
