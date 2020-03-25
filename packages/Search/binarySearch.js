const random =  require('lodash/random');

function binarySearch(arr, num) {
  let head = 0;
  let tail = arr.length - 1;

  while (head <= tail) {
    const middle = parseInt((head + tail) / 2, 10);

    if (arr[middle] === num) {
      return middle;
    } else if (arr[middle] > num) {
      tail = middle - 1;
    } else {
      head = middle + 1;
    }
  }

  return -1;
}

const arr = [...new Array(1000).keys()];
const num = random(0, 2000);
console.log(binarySearch(arr, num), num);