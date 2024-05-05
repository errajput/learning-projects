// Protocol - rules for communication b/w the computers
// http - protocol
// HTTP
// Communication -> Sender <--> Receiver

// Computer-1  <----> Computer-2
//  Sender      ----> Receiver
// Receiver    <----   Sender

// Client ------ Server
// Ex. Browser --> NodeJS Server
// Request --> Client to Server
// Response -->  Server to Client

// HTTP: Methods -- GET, POST, PATCH, PUT, DELETE

// Server - Listens for the Client Requests
const http = require("http");
const fs = require("fs");
// Higher Order Function
http
  .createServer((request, response) => {
    if (request.url == "/") {
      response.end("Hello Browser web disha");
    } else if (request.url == "/about") {
      response.end("Hello Browser web disha about");
    } else if (request.url == "/contact") {
      response.end("Hello Browser web disha contact");
    } else if (request.url == "/userapi") {
      // C:\Users\Pr\hello-node\server\simple-user-server\userapi.json
      // C:\Users\Pr\hello-node\server\simple-http-server
      console.log(__dirname);
      console.log(__filename);
      fs.readFile(
        `${__dirname}/../simple-user-server/userapi.json`,
        "utf-8",
        (err, data) => {
          console.log(data);
          response.writeHead(200, { "content-type": "application/json" });
          response.end(data);
        }
      );
      // response.end("Hello Browser web disha api");
    } else {
      response.writeHead(404, { "content-type": "text / html" });
      response.end("<h1>error</h1>");
    }
    console.log("URL ", request.url);
    console.log("Method ", request.method);

    // Request
    // - query parameter
    // - path parameter
    // - body
    // - headers
    // Response
    // - headers
    // - body(data)
  })
  .listen(8040, () => {
    console.log("Listening on 8040 ");
  });

// http://google.com/users/1001/comments/2023/delete
// http://google.com/users?name=Ram

// const url = require('url');

// const parsedUrl = url.parse(
//   'http://google.com/users/1001/comments/2023/delete'
// );

// console.log(parsedUrl);

// REST-API
// Resource - user
// POST: /users - create
// GET: /users - get all users
// GET: /users/1 - get user detail with id=1
// PATCH: /users/1 - to update user detail with id=1
// DELETE: /users/1 - to delete user with id=1
