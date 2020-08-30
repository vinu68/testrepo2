const { merge } = require('webpack-merge');
const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackShellPluginNext = require('webpack-shell-plugin-next');
const commonConfig = require('./webpack.common.js');

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'inline-source-map',

  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, './src/assets/build'),
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { importLoaders: 1 } },
          {
            loader: 'postcss-loader',
            options: { config: { path: path.resolve(__dirname, 'postcss.config.js') } },
          },
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                './src/assets/sass/maps/index.scss',
                './src/assets/sass/mixins/index.scss',
              ],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new WebpackShellPluginNext({
      onBuildStart: {
        scripts: ['echo "Webpack Start"'],
        blocking: true,
        parallel: false,
      },
      onBuildExit: {
        scripts: ['eleventy --serve'],
        blocking: false,
        parallel: true,
      },
    }),
  ],
  watch: true,
});
