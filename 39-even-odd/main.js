// 1- Select Input Box, Button, Output

const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

const calculate = () => {
  console.log('Calculating Even Odd');

  const value = document.querySelector('#number').value;
  //   TODO: by adding exception handling
  //   if (Number.isNaN(value % 1)) {
  //   }
  const isNumberEven = isEven(value);

  document.querySelector('#result').innerHTML = isNumberEven ? 'Even' : 'Odd';
};

document.querySelector('#calculate').addEventListener('click', calculate);

const sum = (n1, n2) => {
  return n1 + n2;
};

const result = sum(10, 20);
