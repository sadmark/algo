const { getRandomArray } = require('../../shared/random');

function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const len = arr.length;
  const num = arr[len - 1];
  const left = [];
  const right = [];
  for (let i = 0; i < len - 1; i += 1) {
    if (arr[i] < num) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(num, quickSort(right));
}

const arr = getRandomArray(10);
console.log('origin:', arr);
console.log('sorted:', quickSort(arr));
