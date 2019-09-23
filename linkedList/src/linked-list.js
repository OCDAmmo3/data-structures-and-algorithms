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
      } else {
      return false;
      }
    }
  }

  toString() {
    let curr = this.head;
    let listArray = [];
    while(curr) {
      listArray.push(curr.value);
      curr = curr.next;
    }
    return listArray.join(',');
  }
  
  append(input) {
    let curr = this.head;
    let newNode = new Node(input);
    while(curr.next) {
      curr = curr.next;
    }
    curr.next = newNode;
  }

  insertBefore(input, newValue) {
    let curr = this.head;
    let newNode = new Node(newValue);
    while(curr.next) {
      if(curr.next.value === input) {
        let oldNode = curr.next;
        curr.next = newNode;
        curr.next.next = oldNode;
      }
      curr = curr.next;
    }
  }

  insertAfter(input, newValue) {
    let curr = this.head;
    let newNode = new Node(newValue);
    while(curr.next) {
      if(curr.value === input) {
        let oldNode = curr.next;
        curr.next = newNode;
        curr.next.next = oldNode;
      }
      curr = curr.next;
    }
  }
  
};

class Node {
  constructor(input) {
    this.value = input;
    this.next = null;
  }
}

module.exports = LinkedLists;