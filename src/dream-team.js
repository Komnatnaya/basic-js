const { NotImplementedError } = require('../lib');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam( members ) {
  if (Array.isArray(members)) {
    let teamName = '';
    for(let i = 0; i < members.length; i++){
      if( typeof(members[i]) === 'string') {
        let text = members[i].split(' ').join('')
        teamName += text[0];
      }
    }
    return teamName.toUpperCase().split('').sort().join('');
  } else {
    return false
  }
}

module.exports = {
  createDreamTeam
};
