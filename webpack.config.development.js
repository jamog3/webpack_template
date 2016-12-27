var path                       = require('path');
var baseConfig = require('./webpack.config.base.js');
var merge = require('webpack-merge');
var ExtractTextPlugin          = require('extract-text-webpack-plugin');
var BrowserSyncPlugin          = require('browser-sync-webpack-plugin');
var WebpackBuildNotifierPlugin = require('webpack-build-notifier');

var HtmlWebpackPlugin = require('html-webpack-plugin');

// 開発 or build
var isProduction = process.argv.indexOf('-p') !== -1;

// 出力path
var destPath = isProduction ? 'build/' : '.tmp/';

var config = merge(baseConfig, {
  devtool: 'source-map',
  entry: {
    style: './src/stylesheets/common.sass',
    // javascript: './app.js'
  },
  output: {
    path: path.join(__dirname, destPath),
    filename: '[name].js'
  },
  module: {
    loaders: [
      // pug
      {
        test: /\.pug$/,
        loader: 'pug'
      },
      // sass
      {
        test: /\.sass$/,
        loader: ExtractTextPlugin.extract('style-loader','css-loader?sourceMap!sass-loader?outputStyle=expanded&sourceMap=true&sourceMapContents=true')
      }
    ]
  },
  plugins: [
    new WebpackBuildNotifierPlugin(),
    new ExtractTextPlugin('stylesheets/[name].css'),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      server: { baseDir: [destPath] },
      files: [
        destPath + 'stylesheets/*.css',
        destPath + '**/*.html'
      ]
    })
  ]
});

module.exports = config;
