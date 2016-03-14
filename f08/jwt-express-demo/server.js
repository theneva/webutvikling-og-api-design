const express = require('express');
const jwt = require('jwt-simple');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const db = require('mongoose');

const secret = 'this is a super secret secret';

db.connect('mongodb://localhost/jwtexpressdemo');

const User = db.model('User', {
  username: {type: String, required: true},
  passwordHash: {type: String, required: true},
  role: {type: String, required: true}
});

function createUser(username, password, role) {
  const newUser = new User({
    username,
    passwordHash: bcrypt.hashSync(password, 10),
    role,
  });

  newUser.save();
}

const app = express();

app.use('/', bodyParser.json());
app.use('/', cors());

const countries = [
  {name: 'Norway', capital: 'Oslo'},
  {name: 'Denmark', capital: 'Copenhagen'}
];

app.get('/', (req, res) => {
  res.send('Hello');
});

app.post('/authenticate', (req, res) => {
  // verify username + password
  const username = req.body.username;
  const password = req.body.password;

  User.findOne({username: username})
    .then(user => {
      if (!bcrypt.compareSync(password, user.passwordHash)) {
        res.status(401).send('wrong password');
      } else {
        // generate token
        const token = jwt.encode({
          username,
          role: user.role
        }, secret);

        // send token
        res.send(token);
      }
    })
    .catch(err => {
      return res.status(401).send('no such user');
    })
});

app.get('/countries', (req, res) => {
  const token = req.header('X-Token');

  if (!token) {
    return res.status(401).send('No token supplied via header X-Token');
  }

  const user = jwt.decode(token, secret);

  if (user.role === 'user') {
    res.send(countries);
  } else {
    res.status(401).send('user must be admin');
  }
});

const port = 8732;
app.listen(port, () => console.log('listening on port', port));
