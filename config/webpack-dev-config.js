// webpack-dev-config.js

// configuration data related to development only

const webpack = require('webpack');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const paths = require('./paths');
// import common webpack config
const common = require('./webpack-common-config.js');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    historyApiFallback: true
  },
  devtool: 'eval',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
    new MiniCssExtractPlugin({
      path: paths.appBuild,
      filename: 'styles.css'
    })
  ]
});
