'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
    this.length = 0;
  }

  toString() {
    let curr = this.front;
    let listArray = [];
    while(curr) {
      listArray.push(curr.value);
      curr = curr.next;
    }
    return listArray.join(',');
  }

  toArray() {
    let curr = this.front;
    let listArray = [];
    while(curr) {
      listArray.push(curr.value);
      curr = curr.next;
    }
    return listArray;
  }

  enqueue(value) {
    let newNode = new Node(value);
    if(!this.front) {
      this.front = newNode;
      this.back = newNode;
      this.length++;
    } else {
      newNode.prev = this.back;
      this.back.next = newNode;
      this.back = newNode;
      this.length++;
    }
  }

  dequeue() {
    if(!this.front) {
      return;
    } else if(this.length === 1) {
      let temp = this.front;
      this.front = null;
      this.length--;
      return temp.value;
    } else {
      let temp = this.front;
      this.front = this.front.next;
      this.front.previous = null;
      this.length--;
      return temp.value;
    }
  }

  peek() {
    if(!this.front){
      return null;
    }
    return this.front.value;
  }

}

module.exports = Queue;
