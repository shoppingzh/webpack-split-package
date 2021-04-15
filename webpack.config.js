const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    home: './src/home/index.js',
    user: './src/user/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js'
  },
  devServer: {
    contentBase: './dist'
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      // minSize: 30000,
      // maxSize: 500 * 1000,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          maxSize: 500 * 1024,
          name: 'chunk-vendors'
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'home.html',
      chunks: ['home', 'chunk-vendors']
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'user.html',
      chunks: ['user', 'chunk-vendors']
    }),
    new CleanWebpackPlugin()
  ]
}
