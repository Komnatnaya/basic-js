const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let season;
  // if (date) {
  //   let month = date.getMonth();
  //   if (month === 11 || month === 0 || month === 1) {
  //     season = 'winter';
  //   } else if (month === 2 || month === 3 || month === 4) {
  //     season = 'spring';
  //   } else if (month === 5 || month === 6 || month === 7) {
  //     season = 'summer';
  //   } else if (month === 8 || month === 9 || month === 10) {
  //     season = 'autumn';
  //   } else {
  //     throw new Error('Invalid date!')
  //   }
  // } else {
  //   season = 'Unable to determine the time of year!';
  // }

  try {
    if (date) {
      let month = date.getMonth();
      if (month === 11 || month === 0 || month === 1) {
        season = 'winter';
      } else if (month === 2 || month === 3 || month === 4) {
        season = 'spring';
      } else if (month === 5 || month === 6 || month === 7) {
        season = 'summer';
      } else {
        season = 'autumn';
      }
    } else {
      season = 'Unable to determine the time of year!';
    }
  } catch (e) {
    throw new Error('Invalid date!');
  }
  
  return season
}

module.exports = {
  getSeason
};
