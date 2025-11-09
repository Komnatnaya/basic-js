const { NotImplementedError } = require('../lib');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats( domains ) {
  let result = {};
  let resultEl = '';
  domains.forEach((element) => {
    let text = element.split('.').reverse().join('.');
    let textDotted = '.' + text + '.';

    for (let i = 1; i < textDotted.length; i++) {
      if (textDotted[i] == '.') {
        resultEl = textDotted.slice(0, i);
        let number = result[`${resultEl}`];
        if(number) {
          result[`${resultEl}`] = ++number;
        } else {
          result[`${resultEl}`] = 1;
        }
      }
    }
  });
  return result;;
}

module.exports = {
  getDNSStats
};
