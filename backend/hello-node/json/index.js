const fs = require('fs');
const bioData = {
  name: 'disha rajput',
  age: 23,
};
// console.log(bioData.name);
// console.log(bioData.age);
// //object convert into json

const jsonData = JSON.stringify(bioData);
fs.writeFile('json1.json', jsonData, (err) => {
  console.log('done');
});
fs.readFile('json1.json', 'utf-8', (err, data) => {
  //console.log(data);

  const orgData = JSON.parse(data);
  console.log(orgData);
  console.log(data);
});
// console.log(jsonData);

// //json convert into object
// const objData = JSON.parse(jsonData);
// console.log(objData);
