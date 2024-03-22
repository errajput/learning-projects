// 1- Select Input Box, Button, Output

// 0, 1, 1, 2;

const fibonacciSeries = (num) => {
  let prev = 0;
  let next = 1;
  const rv = [0, 1];

  for (let i = 2; i < num; i++) {
    // console.log('i', i);
    const sum = prev + next;
    rv.push(sum);
    prev = next;
    next = sum;
  }

  //   return [0, 1, 1, 2];
  return rv;
};

const calculate = () => {
  console.log("Calculating Fibonacci Series");
  const fibonacciSeriesValues = fibonacciSeries(
    document.querySelector("#number").value
  );

  document.querySelector("#result").innerHTML = fibonacciSeriesValues;
};

document.querySelector("#calculate").addEventListener("click", calculate);
