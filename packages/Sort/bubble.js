const { getRandomArray } = require('../../shared/random');

function bubbleSort(arr) {
  if (arr.length <= 1) return;
  for (let i = 0, len = arr.length; i < len; i += 1) {
    let flag = false;
    for (let j = 0; j < len - i - 1; j += 1) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
        flag = true;
      }
    }
    // 没有数据交换的话就已经变成有序数组了
    // 无需再继续
    if (!flag) break;
  }
}

const arr = getRandomArray();
console.log('origin:', arr);
bubbleSort(arr);
console.log('sorted:', arr);
