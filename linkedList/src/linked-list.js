'use strict';

class LinkedLists {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  insert(input) {
    let newNode = new Node(input);
    if(this.head) {
      newNode.next = this.head;
    }
    this.head = newNode;
    this.length++;
  }

  includes(input) {
    let curr = this.head;
    while(curr !== null) {
      if(curr.value === input) {
        return true;
      }
      else if(curr === null){
        curr = curr.next;
      } else{
      return false;
      }
    }
  }

  toString() {
    let curr = this.head;
    let stringified = '';

    while(curr !== null) {
      if(curr === this.head) {
        stringified = stringified + curr.value;
        curr = curr.next;
      }
    }
    return stringified;
  }
  
};

class Node {
  constructor(input) {
    this.value = input;
    this.next = null;
  }
}

module.exports = LinkedLists;