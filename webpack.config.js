const path = require('path'); //引入我们的node模块里的path
console.log(path.resolve(__dirname, 'dist')); //物理地址拼接
module.exports = {
  entry: './src/index.js', //入口文件  在vue-cli main.js
  output: { //webpack如何向外输出
    path: path.resolve(__dirname, 'dist'), //定位，输出文件的目标路径
    filename: '[name].js' //文件名[name].js默认，也可自行配置
  },
}