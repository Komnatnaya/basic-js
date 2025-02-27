const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let result = [];
  for (let i = 0; i < matrix.length; i++) {
    let arr = [];
    for (let j = 0; j < matrix[i].length; j++) {
      arr.push(0);
    }
    result.push(arr);
  }
  
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j]) {
        if (j > 0) {
          result[i][j - 1] += 1;
          result[i + 1][j - 1] += 1;
        }
        if (i > 0) {
          result[i - 1][j] += 1;
          result[i - 1][j + 1] += 1;
        }
        if (i > 0 && j > 0) {
          result[i - 1][j - 1] += 1;
        }
        result[i][j + 1] += 1;
        result[i + 1][j] += 1;
        result[i + 1][j + 1] += 1;
      }
    }
  }
  return result
}

module.exports = {
  minesweeper
};
