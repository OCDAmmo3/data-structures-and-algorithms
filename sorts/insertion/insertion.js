'use strict';

function insertionSort(list) {
  for(let i = 0; i < list.length; i++) {
    let j = i - 1;
    let temp = list[i];

    while(j >= 0 && temp < list[j]) {
      list[j + 1] = list[j];
      j = j - 1;
    }
    list[j + 1] = temp;
  }
  return list;
}

module.exports = insertionSort;
