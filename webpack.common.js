const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin-webpack5')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

/** 
 * @type { import('webpack').Configuration }
 * */
const config = {
  entry: {
    path: './src/main.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
  },
  module: {
    rules: [
      { 
        test: /\.less?$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader',
        ]
      }, 
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          name: 'public/assets/[name].[ext]',
          esModule: false,
        },
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin(
     {
      filename: 'index.html',
      template:'./src/public/assets/index.html',
     }
    )
  ]
}

module.exports = config;
