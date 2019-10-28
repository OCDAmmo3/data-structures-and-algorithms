'use strict';

const repeatedWord = string => {
  let array = [];
  if(typeof string !== 'string') {
    string = string.toString();
  }
  array.push(string.split(' '));
};

module.exports = repeatedWord;
