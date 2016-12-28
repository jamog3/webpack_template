var HtmlWebpackPlugin = require('html-webpack-plugin');
var fs = require('fs');
// var path = require('path');

var htmlFiles = [
  'index',
  'test/index'
];
var webpackPlugin = [];

// var getFileList = function(dirPath, fileCallback, errCallback) {
//   fs.readdir(dirPath, function(err, files) {
//     if (err) {
//       errCallback(err);
//       return;
//     }
//     files.forEach(function(file) {
//       var filePath = path.join(dirPath, file); // full-path
//       if(fs.statSync(filePath).isDirectory()) {
//         getFileList(filePath, fileCallback); // ディレクトリなら再帰
//       } else {
//         fileCallback(filePath); // ファイルならコールバック
//       }
//     });
//   });
// };

// getFileList(__dirname+'/src/html/', function(path) {
//   var relativePath = path.replace( __dirname+'/src/html/' , '/' );
//   if( relativePath.match(/.pug/) && !relativePath.match(/\/_/) ) {
//     relativePath = relativePath.replace( /.pug/g , '' );
//     htmlFiles.push(relativePath);
//     console.log(htmlFiles); // ファイル１つ受信
//   }
// }, function(err) {
//   console.log("Receive err:" + err);
// });

htmlFiles.forEach(function(data, index, array) {
  webpackPlugin.push(
    new HtmlWebpackPlugin({
      filename: './' + data + '.html',
      template: './src/html/' + data + '.pug'
    })
  );
});

var config = {
  plugins: webpackPlugin
};

module.exports = config;


