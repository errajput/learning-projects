const http = require('http');
const fs = require('fs');
http
  .createServer((req, res) => {
    if (req.url == '/') {
      res.end('hello');
    } else if (req.url == '/about') {
      res.end('hello about');
    } else if (req.url == '/userapi') {
      //   console.log(__dirname);
      //   console.log(__filename);
      fs.readFile(
        `${__dirname}/../simple-user-server/userapi.json`,
        'utf-8',
        (err, data) => {
          console.log(data);
          res.writeHead(200, { 'content-type': 'application/json' });
          res.end(data);
        }
      );
    } else {
      res.writeHead(404, { 'content-type': 'text / html' });
      res.end('<h1>error</h1>');
    }
    console.log('URL ', req.url);
    console.log('Method ', req.method);
  })
  .listen(8000, () => {
    console.log('Listening on 8000 ');
  });

// - headers
// - body
// - query parameters
// - path parameters
