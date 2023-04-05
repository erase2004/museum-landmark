const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const siteList = require('./src/js/siteList')
const imageList = require('./src/js/imageList')

module.exports = {
  entry: './src/js/main.js',
  mode: 'production',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    assetModuleFilename: 'assets/images/[hash][ext][query]'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      title: 'ACGN股市歷史博物館',
      template: './src/index.html',
      templateParameters: {
        siteList,
        imageList
      }
    }),
    new FaviconsWebpackPlugin({
      logo: './src/assets/icons/logo.svg',
      prefix: 'assets/icons/',
      favicons: {
        icons: {
          android: { background: '#fff' },
          appleIcon: { background: '#fff' },
          appleStartup: { background: '#fff' },
          coast: false,
          favicons: { background: '#fff' },
          firefox: { background: '#fff' },
          windows: { background: '#fff' },
          yandex: false
        }
      }
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
        test: /\.(png|jpg|jpeg|gif|webp|mp4|webm)$/i,
        type: 'asset/resource',
        use: [
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true
              },
              optipng: {
                enabled: false
              },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 3,
                strip: true
              },
              gifsicle: {
                enabled: false
              },
              webp: {
                quality: 75
              }
            }
          }
        ]
      }
    ]
  }
}
