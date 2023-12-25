const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  const a = String(n);
  let sum = 0;
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    sum += +a[i];
  }
  let b = String(sum);
  for (let i = 0; i < b.length; i++) {
    result += +b[i];
  }
  return result;
}

module.exports = {
  getSumOfDigits
};
