const sum2 = (n1, n2) => n1 + n2;
const sum3 = (n1, n2, n3) => n1 + n2 + n3;

console.log('Sum');

// Module System
// // 1. CommonJS ----------
// // { sum2 }
// // { sum2 : sum2 }

// module.exports = { sumTwoNumbers: sum2, sum3 };
// exports.sumThreeNumber = sum3;
// module

// 2. New Module System  ------
// i - create package.json - npm init -y
// ii - add type: module in package.json

export { sum2 };

export default sum3;
