'use strict';

function mergeSort(array) {
  if(array.length <= 1) {
    return array;
  }
  let mid = Math.floor(array.length / 2);
  // Left is only the numbers from the beginning to the middle of the array.
  let left = array.slice(0, mid);
  // Right is only the numbers after the middle of the array.
  let right = array.slice(mid);
  // Return a merge of the left and right arrays sorted, recursively.
  return merge(
    mergeSort(left), mergeSort(right)
  );
}

function merge(left, right) {
  let result = [], leftIndex = 0, rightIndex = 0;

  // While the index we're looking for exists for both lists,
  while(leftIndex < left.length && rightIndex < right.length) {
    if(left[leftIndex] < right[rightIndex]) {
      // If the number at the index you're peeking currently in the left side is less than the right, push that in before the right.
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      // If the number at the index you're peeking currently in the right side is less than the left, push that in before the left.
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  // Put together and return a new array, starting with your left side, then the right, as the left will always be smaller.
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

module.exports = mergeSort;
