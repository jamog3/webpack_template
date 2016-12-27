var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
  plugins: [
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: './src/html/index.pug'
    }),
    new HtmlWebpackPlugin({
      filename: './test/index.html',
      template: './src/html/test/index.pug'
    })
  ]
};

module.exports = config;