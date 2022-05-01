const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let result = true;
  let arr = n.split('-');
  if (arr.length != 6) {
    result = false;
  }
  console.log(arr);
  arr = arr.join('').split('');
  console.log(arr);

  let arrNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  for (let i = 0; i < arr.length; i++) {
    let k = 0;
    for (let j = 0; j < arrNumbers.length; j++) {
      if (arr[i] === arrNumbers[j]) {
        k++;
      }
    }
    if (k === 0) {
      result = false;
      break
    }
  }

  return result;
}
module.exports = {
  isMAC48Address
};
