const path = require("path");
const express = require("express");
const app = express();
// app.get(route, callback);
// API
// get- read
// post-create
// put-update
// delete-delete
// relative absolute

//console.log(__dirname);
//console.log(path.join(__dirname, "../public"));
const staticPath = path.join(__dirname, "../public");

// static middleware

app.use(express.static(staticPath));

app.get("/", (req, res) => {
  res.send("Hello from the express");
});
app.get("/disha", (req, res) => {
  res.send("Hello from the disha");
});
app.listen(8000, (err) => {
  console.log("listing the port at 8000");
});
