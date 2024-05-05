const fs = require('fs');
// fs.mkdir('fs', (err) => {
//   console.log('create a folder');
// });

// fs.writeFile('./fs/text.txt', 'This is file system revision. ', (err) => {
//   console.log('write the data in text folder');
// });

// fs.appendFile(
//   './fs/text.txt',
//   'And now I am add the some more line in this file.',
//   (err) => {
//     console.log('write the data in text folder');
//   }
// );

fs.readFile('./fs/text.txt', 'utf-8', (err, data) => {
  if (err) throw err;

  console.log('Data 1 :: ', data);
});

const readMyData = () => {
  const data = fs.readFileSync('./fs/text.txt', 'utf-8');

  console.log('Data 2 :: ', data);
};

readMyData();

console.log('Data 3');

const fileName = 'hello.txt';

// // - Synchronous
// fs.writeFileSync(fileName, 'Hello World');
// const data = fs.readFileSync(fileName, 'utf-8');
// console.log(data);

// - Asynchronous
// fs.writeFile(fileName, 'Hello World Using Asynchronous', () => {});
const data2 = fs.readFile(fileName, (err, data) => {
  // if(err) console.log('Error', error);

  console.log('Data ', data.toString('utf8'));
});
// console.log(data2);

// encoding, decoding --> converting from 1 format of data to another
// - ABC -->

// fs.readFile(fileName, function (err, data) {
//     console.log('Data ', data);
//   });
// // fs.appendFile()

// - Callback
// - Promise
// - Async/Await
