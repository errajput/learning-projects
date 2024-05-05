const http = require('http');

// POST: /users - create
// GET: /users - get all users
// GET: /users/1 - get user detail with id=1
// PATCH: /users/1 - to update user detail with id=1
// DELETE: /users/1 - to delete user with id=1

http
  .createServer((request, response) => {
    console.log('URL ', request.url);
    console.log('Method ', request.method);
    // if (request.method === 'GET') {
    //   response.write('Get Request');
    // } else if (request.method === 'POST') {
    //   response.write('POST Request');
    // }
    switch (request.method) {
      case 'GET':
        response.write('Get Request from Switch');
        break;
      case 'POST':
        response.write('POST Request');
        break;
    }

    response.end();
  })
  .listen(8080, () => {
    console.log('Listening on 8080');
  });
