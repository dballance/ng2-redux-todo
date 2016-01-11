var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devServer: {
        historyApiFallback: true,
        contentBase: "http://localhost:3000/",
        inline:"true",
        publicPath: "/"
    },
  devtool: 'source-map',
  entry: [
    './vendor',
    './index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
      title: 'NG2 Redux Todo',
      template: 'index.html',
      inject: 'body'
    })
  ],
  resolve: {
    extensions: ['', '.js', '.ts']
  },
  module: {
    loaders: [
      { test: /\.ts$/,  loader: 'ts', exclude: /node_modules/ },
      { test: /\.js$/,  loader: 'babel', exclude: /node_modules/ }
    ]
  }
};
