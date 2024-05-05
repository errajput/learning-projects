console.log("Hello World");

// - Even Odd
// - Sum

// 1- Named Function
function isEvenOrOdd(n) {
  if (n % 2) {
    return true;
  } else {
    return false;
  }
}

// 2
const isEvenOrOdd2 = function (n) {
  if (n % 2) {
    return true;
  } else {
    return false;
  }
};

// 3 Arrow Function
const isEvenOrOdd3 = (n) => {
  if (n % 2) {
    return true;
  } else {
    return false;
  }
};

const isEvenOrOdd4 = (n) => {
  return n % 2 ? true : false;
};

const isEvenOrOdd5 = (n) => (n % 2 ? true : false);
// n = 10;
// 10 % 2 = 0
// !0 == true
const isEvenOrOdd6 = (n) => !!(n % 2);

// Sum arrow Functions
const sum = (n1, n2) => {
  return n1 + n2;
};
const sum1 = (n1, n2) => n1 + n2;

console.log(sum1(1, 2));
