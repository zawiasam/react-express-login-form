var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './dev/scripts/app/login.js',

  devServer: {
    hot: true
  },
  
  output: {
    filename: 'app/scripts/login/main.js',
    publicPath: ''
  },

  plugins: [
    new CopyWebpackPlugin([
      { context: 'dev', from: '*.html', to: 'app/' }
    ])
  ],

  module: {
    loaders: [
      { test: /\.js.{0,1}$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' }
    ]
  },
  
  externals: {
    fs: '{}',
    tls: '{}',
    net: '{}',
    console: '{}'
  }
}
