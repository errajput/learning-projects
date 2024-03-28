const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config({ path: 'development.env' });
const app = express();
const Contact = require('./models/contact');
const port = process.env.PORT || 8000;

mongoose
  .connect(process.env.MONGODB_URI, { dbName: 'test' })
  .then(() => {
    console.log('DB Connected');
  })
  .catch((error) => {
    console.log('DB Connection Error', error);
  });

app.use(require('./routes'));

app.listen(port, () => console.log(`Server Listening on ${port}`));
