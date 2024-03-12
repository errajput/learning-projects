const fs = require("fs");
// fs.mkdir("disha", (err) => {
//   console.log("folder created");
// });
// fs.writeFile("./disha/bio.txt", " I am Disha. ", (err) => {
//   console.log("file creted");
// });

// fs.appendFile("./disha/bio.txt", "And my full name is Disha Rajput.", (err) => {
//   console.log("file data appened");
// });

// fs.readFile("./disha/bio.txt", "utf-8", (err, data) => {
//   console.log(data);
// });

// fs.rename("./disha/bio.txt", "./disha/mybio.txt", (err) => {
//   console.log("rename done");
// });

// fs.unlink("./disha/mybio.txt", (err) => {
//   console.log("file delete");
// });

fs.rmdir("./disha", (err) => {
  console.log("delete folder");
});
