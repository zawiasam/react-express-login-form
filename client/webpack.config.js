'use strict';

var CopyWebpackPlugin = require('copy-webpack-plugin');
var uglifyJsPlugin = require('webpack-uglify-js-plugin');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './dev/scripts/app/index.js',

  devServer: {
    hot: true
  },

  output: {
    filename: 'app/scripts/login/main.js',
    publicPath: ''
  },

  plugins: [
    new CopyWebpackPlugin([
      {
        context: 'dev',
        from: '*.html',
        to: 'app/'
      },
      {
        context: 'dev',
        from: 'css',
        to: 'app/css/'
      },
      {
        context: 'dev',
        from: 'libs',
        to: 'app/libs/'
      },
      {
        context: 'dev',
        from: 'images',
        to: 'app/images/'
      },
    ]),
    new uglifyJsPlugin({
        cacheFolder: path.resolve(__dirname, 'cache/'),
    })
    new ExtractTextPlugin('app/css/[name].css'),
  ],

  module: {
    loaders: [
      {
        cacheable: true,
        test: /\.js.{0,1}$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=es2015&presets[]=react'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
      },
    ]
  },

  externals: {
    fs: '{}',
    tls: '{}',
    net: '{}',
    console: '{}'
  }
}
