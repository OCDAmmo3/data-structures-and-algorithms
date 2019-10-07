'use strict';

const BinaryTree = require('./tree');

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree extends BinaryTree {

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
    if(!root) {
      return false;
    } else if(root.value === value) {
      return true;
    }
    if(value < root.value) {
      return this.contains(value, root.left);
    } else if(value > root.value) {
      return this.contains(value, root.right);
    }
  }

}

module.exports = BinarySearchTree;
