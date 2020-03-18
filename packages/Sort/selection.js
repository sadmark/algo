const { getRandomArray } = require('../../shared/random');

function selection(arr) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    let min = arr[i];
    for (let j = i + 1; j < len; j += 1) {
      if (arr[j] < min) {
        min = arr[j];
        arr[j] = arr[i];
        arr[i] = min;
      }
    }
  }
}

const arr = getRandomArray(10);
console.log('origin:', arr);
selection(arr);
console.log('sorted:', arr);
