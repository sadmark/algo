const random = require('lodash/random');

function getRandomArray(len = random(10, 30)) {
  const arr = [];

  for (; len > 0; len--) {
    arr[len - 1] = random(1, 100);
  }

  return arr;
}

exports.getRandomArray = getRandomArray;
