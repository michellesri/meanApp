// npm i extract-text-webpack-plugin -S
// npm i html-webpack-plugin --save-dev
// npm i babel-core babel-loader babel-preset-es2015 css-loader html-loader style-loader webpack webpack-dev-server --save-dev
// npm i angular --save

const htmlPlugin = require('html-webpack-plugin');
const extractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    path: '../server/public',
    filename: 'scripts/bundle.js'
  },
  module: {
    loaders: [ //loaders are how webpack processes files.
      {
        test: /\.css$/,
        loader: 'style!css' //take all the css files process them through the css loader and they will go into the style loader.
      },
      {
        test: /\.html$/,
        loader: 'html?minimize'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  },
  devtool: 'source-map',
  plugins: [
    new htmlPlugin({template: './src/index.html'}),
    new extractTextPlugin('styles/bundle.css')
  ]
};
