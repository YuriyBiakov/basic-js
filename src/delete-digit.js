const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let sum = 0;
  const str = String(n);
  const arr = Array.from(str);
  let index = 0;
  if (arr[1] < arr[0]) index = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i + 1]) {
      index = i;
      break;
    }
  }
  arr.splice(index, 1);
  return Number(arr.join(''));
}

module.exports = {
  deleteDigit
};
