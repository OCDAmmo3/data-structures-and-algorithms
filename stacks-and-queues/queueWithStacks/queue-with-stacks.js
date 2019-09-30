'use strict';

const Stack = require('../stacks/stacks');

class PseudoQueue {
  constructor() {
    this.st1 = new Stack();
    this.st2 = new Stack();
    this.length = 0;
  }

  enqueue(value) {
    if(!value) {
      return 'You have failed';
    }
    this.st1.push(value);
    this.length++;
  }

  dequeue() {
    let curr = this.st1.top;
    while (curr) {
      const value = this.st1.pop();
      this.st2.push(value);
      curr = curr.next;
    }
    let popped = this.st2.pop();
    curr = this.st2.top;
    while (curr) {
      const value = this.st2.pop();
      this.st1.push(value);
      curr = curr.next;
    }
    this.length--;
    return popped;
  }

  toArray() {
    let st1 = this.st1;
    let st2 = this.st2;
    let listArray = [];
    if(st2.length === 0) {
      while(st1.length > 0){
        let popped = st1.pop();
        listArray.push(popped);
      }
    } else {
      let popped = st2.pop();
      listArray.push(popped);
    }
    return listArray.reverse();
  }

}

module.exports = PseudoQueue;
