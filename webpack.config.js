const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const VENDOR_LIBS = [
  "axios",
  "lodash",
  "material-ui",
  "moment",
  "prop-types",
  "react",
  "react-addons-css-transition-group",
  "react-dom",
  "react-redux",
  "react-router-dom",
  "redux",
  "redux-thunk",
  "typeface-roboto"
];

module.exports = {
  entry: {
    bundle: './src/index.js',
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  devServer: {
    host: 'localhost',
    port: '8080'
  },
  module: {
    rules: [{
      use: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }, {
      use: ['style-loader', 'css-loader'],
      test: /\.css$/
    }, {
      use: 'file-loader',
      test: [/\.(png|jpg|gif)$/, /\.(woff|woff2|eot|ttf|svg)$/]
    }]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new webpack.EnvironmentPlugin({
      'NODE_ENV': false,
      'DEV_ENV': 'dev'
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};
