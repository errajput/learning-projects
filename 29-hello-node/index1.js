/**
 *
 * @param {string} s
 * @returns
 */
const tileCase = (s) => {
  // 'hello world'
  return s
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
};

console.log(tileCase("hello world"));
console.log(tileCase("hello world of programming"));
console.log(tileCase("console log"));
