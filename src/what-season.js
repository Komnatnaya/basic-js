const { NotImplementedError } = require('../lib');

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
function getSeason( date ) {
  let season;
  if(!date) {
    return 'Unable to determine the time of year!'
  }

  try {
    date.getTime();
  } catch (error) {
    throw new Error('Invalid date!');
  }

  let month = date.getMonth();
  if (month === 11 || month === 0 || month === 1) {
    season = 'winter';
  } else if (month >= 2 && month <= 4) {
    season = 'spring';
  } else if (month >= 5 && month <= 7) {
    season = 'summer';
  } else {
    season = 'autumn';
  }
  
  return season
}

module.exports = {
  getSeason
};
