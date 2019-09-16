'use strict';

let val = module.exports = {};

const reverseArray = (arr) => {
  arr.forEach(element => {
    let popped = arr.pop(0);
    arr.push(popped);
  });
};