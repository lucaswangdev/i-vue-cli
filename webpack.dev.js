const { merge } = require('webpack-merge');
const webpackCommon = require('./webpack.common.js');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')



/** @type { import('webpack').Configuration }*/
const config = {
  mode: 'development',
  entry: {
    path: './src/main.js',
    // path: path.join(__dirname, './src/main.js'),

  },
  devtool: 'source-map',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
  ],
  devServer: {
    contentBase: 'dist',
    compress: true,
    port: 9000
  }
}
module.exports = merge(webpackCommon, config)