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
