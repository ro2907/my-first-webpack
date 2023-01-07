const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
mode: 'development',
entry: './src/index.js',
output: {
path: path.resolve(__dirname, 'dist'),
filename: 'bundle.js'
},
devServer: {
  static:{
    directory: path.join(process.cwd(), 'dist')
  },
  compress: true,
  port: 8050
  },
plugins:[new HtmlWebpackPlugin({
  template: path.resolve(process.cwd(),"src","index.html") //add new line
  })],
  stats: {
    children: true,
  }
};
