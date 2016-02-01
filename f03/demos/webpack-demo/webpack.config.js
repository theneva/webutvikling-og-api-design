const path = require('path');
const webpack = require('webpack');

const srcDirectory = path.join(__dirname, 'src');

module.exports = {
  entry: path.join(srcDirectory, 'index.js'),
  output: {
    path: path.join(__dirname, 'output'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel', include: srcDirectory },
    ],
  },
};
