const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { merge } = require('webpack-merge');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.(tsx?|jsx?)?$/,
        exclude: /node_modules\//,
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: [require.resolve('react-refresh/babel')],
            },
          },
        ],
      },
    ],
  },
  plugins: [new ReactRefreshWebpackPlugin()],
  devServer: {
    contentBase: './public',
    contentBasePublicPath: '/assets',
    hot: true,
    port: 3000,
  },
});
