// // 1. Common JS --------

// const sum = require('./algebra/sum');

// const value1 = sum.sumTwoNumbers(10, 10);

// console.log('Value 1', value1);
// console.log('Value 2', sum.sum3(1, 2, 3));
// console.log('Value 3', sum.sumThreeNumber(1, 2, 3));

// 2. New Module System
// import { sum2 } from './algebra/sum.js';
import sum from './algebra/sum.js'; // default export

// console.log('Value 1', sum.sum2(1, 2));
console.log('Value ', sum(1, 2, 3));
