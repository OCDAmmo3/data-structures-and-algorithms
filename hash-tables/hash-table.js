'use strict';

const hash = string => {
  if(typeof string === 'object') {
    string.toString();
  }
  if(typeof string === 'number') {
    string.toString();
  }
  if(typeof string === 'string') {
    return true;
  } else {
    return undefined;
  }
};

module.exports = hash;
