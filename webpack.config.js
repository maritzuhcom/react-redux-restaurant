const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const VENDOR_LIBS = [
  "lodash",
  "moment",
  "react",
  "react-addons-css-transition-group",
  "react-dom",
  "react-redux",
  "redux",
  "material-ui",
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
    host: 'localhost.mediaplatformdev.com',
    port: '3132'
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
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};
