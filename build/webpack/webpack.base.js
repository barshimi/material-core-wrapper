/**
 * BASE WEBPACK CONFIGURATION
 */

const path = require('path');
const webpack = require('webpack');
const COMPONENT_PATH = process.env.component;

module.exports = options => COMPONENT_PATH && COMPONENT_PATH.length ? ({
  mode: options.mode,
  entry: options.entry,
  // output: {
  //     path: path.resolve(process.cwd(), 'build'),
  //     publicPath: `/packages/${COMPONENT_PATH}`,
  // },
  output: {
    path: path.resolve(process.cwd(), `/packages/${COMPONENT_PATH}/build`),
},
  devServer: {
   hot: true,
 },
  optimization: options.optimization,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: options.babelQuery,
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(eot|otf|ttf|woff|woff2)$/,
        use: 'file-loader',
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10 * 1024,
            }
          }
        ]
      }
    ]
  },
  plugins: (options.plugins ? options.plugins : []).concat([
     new webpack.EnvironmentPlugin({
       NODE_ENV: 'development',
      //  Component: 
     }),
  ]),
  resolve: {
    modules: ['node_modules', 'packages'],
    extensions: ['.js', '.jsx', '.react.js'],
  },
  devtool: options.devtool,
  target: 'web',
  performance: options.performance || {},
}) : (() => {
  throw new Error('Missing env variable component');
})()
