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
    this.head = newNode.next;
    this.length++;
  }

  includes(input) {

  }

  toString() {

  }
  
};

class Node {
  constructor(input) {
    this.value = input;
    this.next = null;
  }
}

module.exports = LinkedLists;