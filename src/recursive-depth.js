const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;
    let nestedDepths = [];
    const length = arr.length;
    for (let i = 0; i < length; i++) {
      let current = arr[i];
    // console.log(`current is ${current}, current instOF Array ${current instanceof Array}`
      if (current instanceof Array) {
        nestedDepths.push (this.calculateDepth(current));
      }
    }
    if (nestedDepths.length > 0)
    return depth + Math.max(...nestedDepths);
    else return depth;
  }
}

module.exports = {
  DepthCalculator
};
