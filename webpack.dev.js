const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const siteList = require('./src/js/siteList')
const imageList = require('./src/js/imageList')

module.exports = {
  entry: './src/js/main.js',
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'src')
    },
    compress: true,
    port: 9000
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    assetModuleFilename: 'assets/images/[hash][ext][query]'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      title: '[DEV] ACGN股市歷史博物館',
      template: './src/index.html',
      templateParameters: {
        siteList,
        imageList
      }
    }),
    new HtmlWebpackHarddiskPlugin({
      outputPath: path.join(__dirname, 'public')
    }),
    new FaviconsWebpackPlugin({
      logo: './src/assets/icons/logo.svg',
      prefix: 'assets/icons/'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      }
    ]
  }
}
