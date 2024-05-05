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
