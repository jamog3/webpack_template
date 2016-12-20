var path                       = require('path');
var ExtractTextPlugin          = require('extract-text-webpack-plugin');
var BrowserSyncPlugin          = require('browser-sync-webpack-plugin');
var WebpackBuildNotifierPlugin = require('webpack-build-notifier');

// 開発 or build
var isProduction = (process.env.NODE_ENV === 'production') ? true : false;

// 出力path
var destPath = isProduction ? 'build/' : '.tmp/';

// cssMap

var config = {
};

module.exports = config;