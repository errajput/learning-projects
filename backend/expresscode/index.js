const path = require('path');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from the express');
});
app.get('/disha', (req, res) => {
  res.send('Hello from the disha');
});
app.listen(8000, (err) => {
  console.log('listening the port at 8000');
});
