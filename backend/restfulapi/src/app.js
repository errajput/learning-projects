const express = require('express');
require('./db/conn');

const Student = require('./db/models/student');
const app = express();
const port = process.env.PORT || 8080;
// create a new student

app.get('/', (req, res) => {
  res.send('hello from the other side by me');
});

app.post('/student', (req, res) => {
  res.send('hello from the other side');
});

app.listen(port, () => {
  console.log(`connection is setup at ${port}`);
});
