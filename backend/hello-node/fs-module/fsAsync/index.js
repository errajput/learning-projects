const fs = require("fs");

// fs.writeFile("read.txt", "today is friday:", (err) => {      //create a new file and add the text
//   console.log("files is creted");
//   console.log("err");
// });

// fs.appendFile("read.txt", "tommorow is saturday", (err) => {       // add new text in same file
//   console.log("complated");
// });

// fs.readFile("read.txt", "utf-8", (err, data) => {
//                                                     // for read data
//   console.log(data);
// });

// const data = fs.readFileSync("read.txt", "utf-8");
// console.log(data);
// console.log("after the data"); //sync

fs.readFile("read.txt", "utf-8", (err, data) => {
  console.log(data);
});
console.log("after the data"); //  async

///challenge
