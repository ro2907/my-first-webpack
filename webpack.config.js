const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
mode: "development",
entry: "./src/index.js",
output: {
path: path.resolve(__dirname, "dist"),
filename: "bundle.js"
},
module: {
  rules: [
  {
  test: /\.html$/i,
  loader: "html-loader",
  options: {
  interpolate: true},
  },
  ],
  },
devServer: {
  
    contentBase: path.join(process.cwd(), 'dist'),
  compress: true,
  port: 8050
  },
plugins:[new HtmlWebpackPlugin({
  template: path.resolve(process.cwd(), "src", "index.html") 
  })],
  stats: {
    children: true,
  }
};
