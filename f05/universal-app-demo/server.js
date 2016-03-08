import path from 'path';

import React from 'react';
import ReactDOM from 'react-dom/server';

import Container from './components/Container.jsx';
import Header from './components/Header.jsx';
import StateWrapper from './components/StateWrapper.jsx';

import express from 'express';
const app = express();


const staticPath = path.join(__dirname, 'static');
app.use('/static', express.static(staticPath));

const skeleton = ReactDOM.renderToStaticMarkup(
  <html>
    <head>
      <title>Blah</title>
    </head>
    <body>
      <div id="container">!markup!</div>
      <script src="/static/bundle.js"></script>
    </body>
  </html>
);


app.get('/', (req, res) => res.send(skeleton.replace('!markup!', ReactDOM.renderToString(
  <Container>
    <StateWrapper/>
  </Container>
))));

app.listen(1234, () => console.log('listening on port 1234'));
