const { getRandomArray } = require('../../shared/random');

function bubbleSort(arr) {
  if (arr.length <= 1) return;
  for (let i = 0, len = arr.length; i < len; i += 1) {
    for (let j = 0; j < len - i - 1; j += 1) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
}

const arr = getRandomArray();
console.log('origin:',arr);
bubbleSort(arr);
console.log('sorted:', arr);
