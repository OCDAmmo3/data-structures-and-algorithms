'use strict';

const LinkedLists = require('../../linkedList/src/linked-list');

let mergeLists = (list1, list2) => {
  let newList = new LinkedLists();
  let curr1 = list1.head;
  let curr2 = list2.head;

  while(curr1 !== null || curr2 !== null) {
    if(newList.length === 0) {
      newList.insert(curr1.value);
      curr1 = curr1.next;
    }
    if(curr2 !== null) {
      newList.append(curr2.value);
      curr2 = curr2.next;
    }
    if(curr1 !== null) {
      newList.append(curr1.value);
      curr1 = curr1.next;
    }
  }
  return newList;
};

module.exports = mergeLists;
