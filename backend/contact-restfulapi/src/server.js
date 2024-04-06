import express from 'express';
import { connect } from 'mongoose';
require('dotenv').config({ path: 'development.env' });
const app = express();
import Contact from './models/contact';
const port = process.env.PORT || 8000;

connect(process.env.MONGODB_URI, { dbName: 'test' })
  .then(() => {
    console.log('DB Connected');
  })
  .catch((error) => {
    console.log('DB Connection Error', error);
  });

app.use(require('./routes'));

app.listen(port, () => console.log(`Server Listening on ${port}`));
