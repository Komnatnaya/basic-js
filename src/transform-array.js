const { NotImplementedError } = require('../lib');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform( arr ) {
  let newArr = [];

  if (Array.isArray(arr)) {
    newArr = arr.slice();

    function transformArr(i) {
      switch (newArr[i]) {
        case '--discard-next':
          if (i === newArr.length - 1) {
            newArr.splice(i, 1);
            transformArr(i);
          } else {
            newArr.splice(i, 2);
            if (newArr[i] === '--discard-prev' || newArr[i] === '--double-prev'){
              newArr.splice(i, 1);
            }
            transformArr(i);
          }
          break;
        case '--discard-prev':
          if (i === 0) {
            newArr.splice(i, 1);
            transformArr(i);
          } else {
            newArr.splice(i - 1, 2);
            transformArr(i);
          }
          break;
        case '--double-next':
          if (i === newArr.length - 1) {
            newArr.splice(i, 1);
          } else {
            newArr.splice(i, 1, arr[i + 1]);
          }
          break;
        case '--double-prev':
          if (i === 0) {
            newArr.splice(i, 1);
          } else {
            newArr.splice(i, 1, arr[i - 1]);
          }
          break
      }
    }

    for (let i = 0; i < newArr.length; i++) {
      transformArr(i);
    }
  } else {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }
  
  return newArr
}

module.exports = {
  transform
};
