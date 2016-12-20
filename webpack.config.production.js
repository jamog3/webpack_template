var path                       = require('path');
var baseConfig = require('./webpack.config.base.js');
var merge = require('webpack-merge');
var ExtractTextPlugin          = require('extract-text-webpack-plugin');
var BrowserSyncPlugin          = require('browser-sync-webpack-plugin');
var WebpackBuildNotifierPlugin = require('webpack-build-notifier');

// 開発 or build
var isProduction = process.argv.indexOf('-p') !== -1;

// 出力path
var destPath = isProduction ? 'build/' : '.tmp/';


var config = merge(baseConfig, {
  entry: {
    style: './src/stylesheets/common.sass'
  },
  output: {
    path: path.join(__dirname, destPath + 'stylesheets'),
    filename: '[name].css'
  },
  module: {
    loaders: [
      {
        test: /\.sass$/,
        loader: ExtractTextPlugin.extract('css!sass')
      }
    ]
  },
  plugins: [
    new WebpackBuildNotifierPlugin(),
    new ExtractTextPlugin('[name].css'),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      server: { baseDir: [destPath] },
      files: [
        '.tmp/*.css',
        '.tmp/*.html'
      ]
    })
  ]
});

module.exports = config;
