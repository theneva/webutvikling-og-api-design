const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'index.js'),
  output: {
    path: './static/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {test: /\.jsx?$/, loader: 'babel-loader'},
    ],
  },
};
