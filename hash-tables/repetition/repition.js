'use strict';

const HashTable = require('../hash-table')
let regex = /[^a-z]+/i

const repeatedWord = string => {
  let tempStorage = new HashTable;
  if(typeof string !== 'string') {
    string = string.toString();
  }
  let tempArray = string.split(regex);
  for(let i = 0; i < tempArray.length - 1; i++) {
    let compare = tempArray[i].toLowerCase();
    if(!tempStorage.contains(compare)) {
      let obj = {};
      obj[compare] = compare;
      tempStorage.add(obj);
    } else {
      return compare;
    }
  }
  return 'No repeating words.';
};

module.exports = repeatedWord;
