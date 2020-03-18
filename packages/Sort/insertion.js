const { getRandomArray } = require('../../shared/random');

function insertion(arr) {
  for (let i = 1, len = arr.length; i < len; i += 1) {
    const value = arr[i];
    let j = i - 1;
    for (; j >= 0; j -= 1) {
      if (value < arr[j]) {
        arr[j + 1] = arr[j];
      } else {
        break;
      }
    }
    arr[j + 1] = value;
  }
}

const arr = getRandomArray(10);
console.log('origin:',arr);
insertion(arr);
console.log(arr);
