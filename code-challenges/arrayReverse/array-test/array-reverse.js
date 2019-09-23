'use strict';

const reverseArray = (arr) => {
  let newArr = [];
  for (let i = 0; arr.length > 0; i++) {
    let popped = arr.pop(i);
    newArr.push(popped);
  };
  return newArr;
};

module.exports = reverseArray;