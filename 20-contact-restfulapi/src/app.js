const express = require('express');

require('./db/conn');

const Contact = require('./db/models/contact');
const app = express();
const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.send('hello from the other side by me');
});

app.post('/contact', (req, res) => {
  res.send('hello from the other side');
});

app.listen(port, () => {
  console.log(`connection is setup at ${port}`);
});
