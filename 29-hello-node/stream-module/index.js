//not a streming

// const fs = require("fs");
// const http = require("http");
// const server = http.createServer();
// server.on("request", (req, res) => {
//   var fs = require("fs");
//   fs.readFile("input.txt", (err, data) => {
//     if (err) return console.error(err);
//     res.end(data.toString());
//   });
// });
// server.listen(8000, "127.0.0.1");

// this is streaming
const fs = require("fs");
const http = require("http");
const server = http.createServer();
server.on("request", (req, res) => {
  //   const rstrem = fs.createReadStream("input.txt");
  //   rstrem.on("data", (chunkdata) => {
  //     res.write(chunkdata);
  //   });
  //   rstrem("end", () => {
  //     res.end();
  //   });

  // server.listen(8000, "127.0.0.1");

  ///stream pipe

  const rstrem = fs.createReadStream("input.txt");
  rstrem.pipe(res);
});
server.listen(8000, "127.0.0.1");
