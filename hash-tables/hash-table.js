'use strict';

const hash = string => {
  if(string === undefined || string === null) {
    return false;
  }
  if(typeof string === 'object') {
    string = string.toString();
  }
  if(typeof string === 'number') {
    string = string.toString();
  }
  if(typeof string === 'string') {
    return true;
  } else {
    return undefined;
  }
};

module.exports = hash;
