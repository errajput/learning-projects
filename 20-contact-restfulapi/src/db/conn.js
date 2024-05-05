const mongoose = require("mongoose");
require("dotenv").config({ path: "exc.env" });
mongoose
  .connect(process.env.MONGODB_URI, { dbName: "test" })

  // {
  //   useCreateIndex: true,
  .then(() => {
    console.log("connection is successful");
  })
  .catch((e) => {
    console.log(e);
  });
