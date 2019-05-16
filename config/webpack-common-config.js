// webpack-common-config.js

// This file will contain configuration data that
// is shared between development and production builds.

const HtmlWebpackPlugin = require('html-webpack-plugin');

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
    publicPath: '/'
  }
  // resolve: {
  //   // File extensions. Add others and needed (e.g. scss, json)
  //   extensions: ['.js', '.jsx'],
  //   modules: ['node_modules'],
  //   // Aliases help with shortening relative paths
  //   // 'Components/button' === '../../../components/button'
  //   alias: {
  //     Components: path.resolve(paths.appSrc, 'components'),
  //     Containers: path.resolve(paths.appSrc, 'containers'),
  //     Utils: path.resolve(paths.appSrc, 'utils'),
  //   },
  // },
  // module: {
  //   rules: [
  //     {
  //       test: /\.(png|svg|jpg)$/,
  //       use: ['file-loader'],
  //     },
  //   ],
  // },
};
