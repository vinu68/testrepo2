const path = require('path');
const StyleLintPlugin = require('stylelint-webpack-plugin');

const ManifestPlugin = require('webpack-manifest-plugin');
const glob = require('glob');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

const componentCssEntryPoints = glob.sync('./src/includes/components/**/*.scss');
const mainJsEntryPoints = glob.sync('./src/assets/js/**/*.js');
const componentJsEntryPoints = glob.sync('./src/includes/components/**/*.js');
const componentUtilJsEntryPoints = glob.sync('./src/utils/global/*.js');

const globalJsBundle = [...mainJsEntryPoints, ...componentUtilJsEntryPoints];
let entryPoint = {
  main: globalJsBundle,
  critical: [path.resolve(__dirname, 'src', 'assets', 'sass', 'global.scss')],
  plugins: [path.resolve(__dirname, 'src', 'assets', 'sass', 'plugins', 'index.scss')],
};

if (componentCssEntryPoints.length) {
  entryPoint = { ...entryPoint, ...{ style: componentCssEntryPoints } };
}
if (componentJsEntryPoints.length) {
  entryPoint = { ...entryPoint, ...{ app: componentJsEntryPoints } };
}

module.exports = {
  entry: entryPoint,
  plugins: [
    new ManifestPlugin({ publicPath: '/build/' }),
    new StyleLintPlugin({
      configFile: path.resolve(__dirname, './stylelint.config.js'),
      context: 'src',
      files: '**/*.scss',
      emitErrors: true,
      emitWarning: true,
      failOnError: true,
      failOnWarning: true,
    }),
    new SpriteLoaderPlugin(),
  ],
  node: {
    global: true,
    fs: 'empty',
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          emitError: true,
          emitWarning: true,
          failOnWarning: true,
          failOnError: true,
        },
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: '/node_modules',
      },
      {
        test: /\.(svg|png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
          context: path.resolve(__dirname, 'src/assets'),
          outputPath: '/',
          publicPath: '/',
          useRelativePaths: true,
        },
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
          options: {
            interpolate: true,
            minimize: true,
          },
        },
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        options: {
          extract: true,
          spriteFilename: (svgPath) => `sprite${svgPath.substr(-4)}`,
          publicPath: '/sprites/',
        },
      },
    ],
  },
};
