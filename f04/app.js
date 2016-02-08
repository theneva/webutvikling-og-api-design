import cors from 'cors';
import bodyParser from 'body-parser';
import express from 'express';

const app = express();

// middleware for everything under path /
app.use('/', cors());
app.use('/', bodyParser.json());

const greeting = {
  to: 'Liam',
  from: 'Martin',
  message: 'Hello, there!',
};

app.get('/', (req, res) => res.send(greeting));

app.listen(1234, () => console.log('Listening on port 1234!'));
