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
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let str = n.toString();
  let arr = [];
  for(let i = 0; i < str.length; i++) {
    arr.push(str.replace(str[i], ''));
  }
  let max = +arr[0];
  for (let j = 1; j < arr.length; j++) {
    if (max < +arr[j]) {
      max = +arr[j];
    }
  }

  return max;
}

module.exports = {
  deleteDigit
};
