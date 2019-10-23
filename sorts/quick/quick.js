'use strict';

function quickSort(array, left, right) {
  let index;
  if(array.length > 1) {
    index = partition(array, left, right);
    if(left < index - 1) {
      quickSort(array, left, index - 1);
    }
    if(index < right) {
      quickSort(array, index, right);
    }
  }
  return array;
}

function partition(array, left, right) {
  let pivot = array[Math.floor((right + left) / 2)];
  let i = left;
  let j = right;

  while(i <= j) {
    while(array[i] < pivot) {
      i++;
    }
    while(array[j] > pivot) {
      j--;
    }
    if(i <= j) {
      arraySwap(array, i, j);
      i++;
      j--;
    }
  }
  return i;
}

function arraySwap(array, left, right) {
  let temp = array[left];
  array[left] = array[right];
  array[right] = temp;
}

module.exports = quickSort;
