const path = require('path');

const dotenv = require('dotenv').config()

const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {

  context: process.cwd(),
  entry: {
    app: './src/index.js'
  },

  devServer: {
    historyApiFallback: {
      index: '/public/',
      rewrites: [
          { from: /./, to: '/public/' },
      ]
    },
  },

  output: {
    path: path.resolve(__dirname, "public"),
    publicPath: '/public/',
    filename: "[name].js",
    chunkFilename: "[id].js"
  },

  resolve: {
    extensions: ['.js', '.json', '.jsx']
  },

  devtool: 'eval-source-map',

  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.js[x]?$/,
        exclude: (/node_modules/),
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-2'],
          plugins: ['transform-es2015-spread']
        }
      }
    ]
  },


  plugins: [
    new HtmlWebpackPlugin({
      title: 'App',
      favicon: './src/favicon.ico',
      hash: true,
      template: "./src/index.template.html",
      inject: 'body'
    }),
    new webpack.EnvironmentPlugin(["API_URL"]),
    new ExtractTextPlugin('style.css'),
  ]
};
