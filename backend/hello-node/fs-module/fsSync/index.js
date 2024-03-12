const fs = require("fs");

//creating new file

//fs.writeFileSync("read.txt", "welcome to node");
//fs.writeFileSync("read.txt", "welcome to node,and this is my first node code");

//fs.appendFileSync("read.txt", ". I am very happy");

//const buf_data = fs.readFileSync("read.txt");
// console.log(buf_data);

// org_data = buf_data.toString();
// console.log(org_data);

fs.renameSync("read.txt", "redwrite.txt");
