const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const config = require('./webpack.config');
const compiler = webpack(config);

const app = express();

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
}));

app.use(webpackHotMiddleware(compiler));

app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.listen(3000, err => {
  if (err) {
    throw new Error(err);
  }

  console.log('Listening on http://localhost:3000');
})
