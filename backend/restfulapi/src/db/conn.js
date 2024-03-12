const mongoose = require('mongoose');
mongoose
  .connect(
    ''
    // {
    //   useCreateIndex: true,
    // }
  )
  .then(() => {
    console.log('connection is successful');
  })
  .catch((e) => {
    console.log('no connection');
  });
