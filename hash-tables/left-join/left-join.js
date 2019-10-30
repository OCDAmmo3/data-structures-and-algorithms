'use strict';

const leftJoin = (leftHash, rightHash) => {
  let results = [];
  if(leftHash) {
    leftHash.storage.forEach(index => {
      let temp = [];
      temp.push(Object.keys(index.head.value)[0]);
      temp.push(Object.values(index.head.value)[0]);
      results.push(temp);
    })
  }
  if(rightHash) {
    rightHash.storage.forEach(index => {
      results.forEach(array => {
        if(Object.keys(index.head.value)[0] === array[0] && !array[2]) {
          array[2] = Object.values(index.head.value)[0];
        } else if(!array[2]) {
          array[2] = null;
        }
      });
    });
  }
  return results;
}

module.exports = leftJoin;
