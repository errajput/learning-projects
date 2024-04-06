import { config } from 'dotenv';
import { connect } from 'mongoose';
import express from 'express';

import UserRoutes from './routes/user.routes.js';

config({ path: 'development.env' });

const main = async () => {
  try {
    await connect(process.env.MONGODB_URI, { dbName: 'test' });
    console.log('DB Connected');
    const app = express();

    app.use('/users', UserRoutes);

    const port = process.env.PORT || 8000;
    app.listen(port, () => console.log(`Server Listening on ${port}`));
  } catch (error) {
    console.log('Error :', error);
  }
};

main();
