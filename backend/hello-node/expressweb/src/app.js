const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

// public static path
const static_path = path.join(__dirname, "../public");

app.use(express.static(static_path));

app.get("", (req, res) => {
  res.send("welcome to web");
});

app.get("/about", (req, res) => {
  res.send("welcome to about");
});

app.get("/weather", (req, res) => {
  res.send("welcome to weather");
});

app.get("*", (req, res) => {
  res.send("404, error page opne");
});
app.listen(port, () => {
  console.log(`listening to the port at ${port}`);
});
