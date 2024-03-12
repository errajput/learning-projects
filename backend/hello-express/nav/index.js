const express = require("express");
const app = express();
const port = 3000;
app.get("/", (req, res) => {
  res.write("<h1>welcome to my home page</h1>");
  res.write("<h1>welcome to my again home page</h1>");
  res.send();
});

app.get("/about", (req, res) => {
  res.send("welcome to about page");
});

app.get("/contact", (req, res) => {
  res.send("welcome to contact page");
});

app.get("/temp", (req, res) => {
  res.send([
    {
      id: 1,
      name: "disha",
    },
    {
      id: 1,
      name: "disha",
    },
    {
      id: 1,
      name: "disha",
    },
  ]);
});

app.listen(port, () => {
  console.log(`listening to the port no ${port}`);
});
