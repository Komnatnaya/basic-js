const { NotImplementedError } = require('../lib');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  return matrix.reduce((sum, row, rowIndex) => {
    return sum + row.reduce((rowSum, value, colIndex) => {
      for (let i = 0; i < rowIndex; i++) {
        if (matrix[i][colIndex] === 0) {
          return rowSum;
        }
      }
      return rowSum + value;
    }, 0);
  }, 0);
}

module.exports = {
  getMatrixElementsSum
};
