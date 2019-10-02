'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  toString() {
    let curr = this.top;
    let listArray = [];
    while(curr) {
      listArray.push(curr.value);
      curr = curr.next;
    }
    return listArray.join('');
  }

  push(value) {
    let newNode = new Node(value);
    if(this.top) {
      newNode.next = this.top;
    }
    this.top = newNode;
    this.length++;
  }

  pop() {
    if(!this.top) {
      return;
    }
    let result = this.top.value;
    this.top = this.top.next;
    this.length--;
    return result;
  }

  peek() {
    if(!this.top) {
      return;
    }
    return this.top.value;
  }

}

module.exports = Stack;
