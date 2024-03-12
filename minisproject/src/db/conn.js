const mongoose = require('mongoose');

mongoose
  .connect('', {})
  .then(() => {
    console.log(`connection successful`);
  })
  .catch((e) => {
    console.log(`no connection`);
  });
