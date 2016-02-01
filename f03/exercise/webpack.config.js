const path = require('path');
const webpack = require('webpack');

const srcDirectory = path.join(__dirname, 'src');

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    path.join(srcDirectory, 'index.js'),
  ],
  output: {
    path: path.join(__dirname, 'output'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  module: {
    loaders: [
      {test: /\.jsx?$/, loader: 'babel-loader', include: srcDirectory},
    ],
  },
};
