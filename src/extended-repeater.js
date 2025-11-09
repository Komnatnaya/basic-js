const { NotImplementedError } = require('../lib');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  let repeatStr;
  let arr = [];
  let additionArr = [];
  let text = String(str);

  let separatorStr = options.separator ? options.separator : '+';
  let additionStr = (options.addition === undefined) ? '' : String(options.addition);
  let additionSeparatorStr = options.additionSeparator ? options.additionSeparator : '|';
  let additionRepeatTimesStr = options.additionRepeatTimes ? options.additionRepeatTimes : 1;

  for (let i = 0; i < additionRepeatTimesStr; i++){
    additionArr.push(additionStr);
  }
  let additionAllStr = additionArr.join(additionSeparatorStr);

  let repeatTimesStr = options.repeatTimes ? options.repeatTimes : 1;

  for (let i = 0; i < repeatTimesStr; i++){
    if (additionAllStr.length > 0) {
      arr.push(text + additionAllStr);
    } else {
      arr.push(text);
    }
  }

  repeatStr = arr.join(separatorStr);

  return repeatStr;
}

module.exports = {
  repeater
};
