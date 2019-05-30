// webpack-common-config.js

// This file will contain configuration data that
// is shared between development and production builds.

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const path = require('path');
const paths = require('./paths');

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml,
    }),
  ],
  entry: {
    app: paths.appIndexJs
  },
  output: {
    filename: '[name].js',
    path: paths.appBuild,
    publicPath: '/static'
  },
  module: {
    rules: [
      {
        // look for .js or .jsx files
        test: /\.(js|jsx)$/,
        // in the `src` directory
        include: path.resolve(paths.appSrc),
        exclude: /(node_modules)/,
        use: {
          // use babel for transpiling JavaScript files
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: ['@babel/react'],
          },
        },
      },
      {
        // look for .css or .scss files
        test: /\.(css|scss)$/,
        use: [

          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ],
  },
};
