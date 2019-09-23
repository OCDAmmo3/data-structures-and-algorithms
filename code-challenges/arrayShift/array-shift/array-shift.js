'use strict';

const shiftArray = (arr, val) => {
  let split = arr.length / 2;
  let newArr = [];
  if(!Array.isArray(arr)){
    return false;
  };
  if(arr.length / 2 === .5 || arr.length === 0){
    arr.push(val);
    return arr;
  };
  if(arr.length % 2 === 0){
    for(let i = 0; i < split; i++){
      newArr.push(arr[i])
    };
    newArr.push(val)
    for(let i = 0; i < split; i++){
      newArr.push(arr[newArr.length - 1])
    };
    return newArr;
  };
  if(arr.length % 2 === 1){
    for(let i = 0; i < split + .5; i++){
      newArr.push(arr[i])
    };
    newArr.push(val)
    for(let i = 0; i < split - .5; i++){
      newArr.push(arr[newArr.length - 1])
    };
    return newArr;
  };
};


module.exports = shiftArray;