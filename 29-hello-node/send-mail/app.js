const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("I am sever");
});
const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`I am live in port no. 5000 ${PORT}`);
    });
  } catch (error) {}
};
start();
