/**
 * DEVELOPMENT WEBPACK CONFIGURATION
 */

 const path = require('path');
 const webpack = require('webpack');
 const HtmlWebpackPlugin = require('html-webpack-plugin');
 const ComponentInitializer = require('./ComponentInitializer');
 const CircularDependencyPlugin = require('circular-dependency-plugin');
 const VirtualModulePlugin = require('virtual-module-webpack-plugin');
 const COMPONENT_PATH = process.env.component; 

 module.exports = require('./webpack.base')({
   mode: 'development',
   entry: COMPONENT_PATH && COMPONENT_PATH.length ? `./packages/${process.env.component}/story.js` : '',
   output: {
     filename: '[name].js',
     chunkFilename: '[name].chunk.js',
   },
   optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  devServer: {
    watchContentBase: true
  },
  plugins: [
    new CircularDependencyPlugin({
      exclude: /a\.js|node_modules/, // exclude node_modules
      failOnError: false, // show a warning when there is a circular dependency
    }),
    new HtmlWebpackPlugin({
      template: 'build/index.html',
      inject: true
    }),
    new VirtualModulePlugin({
      moduleName: `packages/${process.env.component}/story.js`,
      contents: ComponentInitializer(COMPONENT_PATH)
    })
  ],
  devtool: 'eval-source-map',
  performance: {
    hints: false
  },
  resolve: {
    modules: [
      path.join(__dirname, 'packages'),
      'node_modules',
    ],
  },
 })
