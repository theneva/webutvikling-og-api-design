const db = require('mongoose');

db.connect('mongodb://localhost/mongodemo');

const express = require('express');
const app = express();

const Person = db.model('Person', {
  name: String,
  age: Number,
});

app.get('/people', (req, res) => {
  Person.find((err, people) => res.send(people));
});

app.post('/people', (req, res) => {
  const person = req.body;

  // check that person has the required things

  const model = new Person(person);

  model.save(function(err) {
    if (err) {
      res
          .status(400)
          .send('person must have name and age');
      return;
    }

    res.send(model);
  });
})

app.get('/people/create', (req, res) => {
  const person = new Person({
    name: 'James',
    age: 14,
  });

  person.save();
  res.send(person);
});

app.listen(1234, () => console.log('listening on 1234'));
