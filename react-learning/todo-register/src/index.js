import Mongoose from 'mongoose';
import { DB_NAME } from './constants.js';

import dotenv from 'dotenv';
import express from 'express'; //module

const app = express();

dotenv.config({});

(async () => {
  try {
    await Mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

    app.get('/', function (req, res) {
      // request and response
      res.send('Hello World');
    });

    console.log('hahah');
  } catch (error) {
    console.log('ERROR:', error);
    throw error;
  }
  app.listen(process.env.PORT);
})();
