const { getRandomArray } = require('../../shared/random');

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const middle = parseInt(arr.length / 2, 10);
  return mergeTwoArr(mergeSort(arr.slice(0, middle)), mergeSort(arr.slice(middle)));
}

function mergeTwoArr(arr1, arr2) {
  const ret = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      ret.push(arr1[i]);
      i++;
    } else {
      ret.push(arr2[j]);
      j++;
    }
  }

  return ret.concat(arr1.slice(i), arr2.slice(j));
}

const arr = getRandomArray(10);
console.log('origin:', arr);
console.log('sorted:', mergeSort(arr));
