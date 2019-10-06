'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
    this.length = 0;
  }

  add(value, root = this.root) {
    if(!root) {
      return this.root = new Node(value);
    } else if(value < root.value && !root.left) {
      return root.left = new Node(value);
    } else if(value > root.value && !root.right) {
      return root.right = new Node(value);
    }
    if(value < root.value) {
      this.add(value, root.left);
    } else if(value > root.value) {
      this.add(value, root.right);
    }
  }

  contains(value, root = this.root) {
  }

}

module.exports = BinarySearchTree;
