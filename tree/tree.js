'use strict';

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

  fizzBuzzTree(root = this.root, results = []) {
    results.push(root.value);
    if(root.left) {
      this.preOrder(root.left, results);
    }
    if(root.right) {
      this.preOrder(root.right, results);
    }
    if(root.value % 15 === 0) {
      root.value = 'FizzBuzz';
    } else if(root.value % 5 === 0) {
      root.value = 'Buzz';
    } else if(root.value % 3 === 0) {
      root.value = 'Fizz';
    }
    return results;
  }

}

module.exports = BinaryTree;
