'use strict';

let Queue = require('../stacks-and-queues/queues/queues');

class BinaryTree {
  constructor() {
    this.root = null;
  }

  preOrder(root = this.root, results = []) {
    results.push(root.value);
    if(root.left) {
      this.preOrder(root.left, results);
    }
    if(root.right) {
      this.preOrder(root.right, results);
    }
    return results;
  }

  inOrder(root = this.root, results = []) {
    if(root.left) {
      this.inOrder(root.left, results);
    }
    results.push(root.value);
    if(root.right) {
      this.inOrder(root.right, results);
    }
    return results;
  }

  postOrder(root = this.root, results = []) {
    if(root.left) {
      this.postOrder(root.left, results);
    }
    if(root.right) {
      this.postOrder(root.right, results);
    }
    results.push(root.value);
    return results;
  }

  breadth(root = this.root) {
    let breadth = new Queue();
    let results = [];
    breadth.enqueue(root);
    while(breadth.peek()) {
      let front = breadth.dequeue();
      results.push(front.value);
      if(front.left) {
        breadth.enqueue(front.left);
      }
      if(front.right) {
        breadth.enqueue(front.right);
      }
    }
    return results;
  }

  fizzBuzzTree(root = this.root, results = []) {
    if(root.value % 15 === 0) {
      root.value = 'FizzBuzz';
    } else if(root.value % 5 === 0) {
      root.value = 'Buzz';
    } else if(root.value % 3 === 0) {
      root.value = 'Fizz';
    }
    results.push(root.value);
    if(root.left) {
      this.fizzBuzzTree(root.left, results);
    }
    if(root.right) {
      this.fizzBuzzTree(root.right, results);
    }
    return results;
  }

  findMax(root = this.root) {
    let queue = new Queue();
    let compare = new Queue();
    queue.enqueue(root);
    while(queue.next) {
      let front = queue.dequeue();
      if(front.left) {
        queue.enqueue(front.left);
      }
      if(front.right) {
        queue.enqueue(front.right);
      }
    }
    let front = queue.front;
    while(front.next) {
      if(front.value > front.next.value) {
        compare.enqueue(front);
      } else {
        front = front.next;
      }
    }
    return compare.front.value;
  }

}

module.exports = BinaryTree;
