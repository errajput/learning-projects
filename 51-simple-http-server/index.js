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
const http = require('http');

// Higher Order Function
http
  .createServer((request, response) => {
    console.log('URL ', request.url);
    console.log('Method ', request.method);

    // Request
    // - query parameter
    // - path parameter
    // - body
    // - headers
    // Response
    // - headers
    // - body(data)

    response.end('Hello Browser');
  })
  .listen(8080, () => {
    console.log('Listening on 8080');
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
