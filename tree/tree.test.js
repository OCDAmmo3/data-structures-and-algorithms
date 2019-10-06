'use strict';

let BinaryTree = require('./tree');
let BinarySearchTree = require('./searchTree');

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

describe('Binary Trees Tests', () => {
  it('should return an array with the values in pre-order, root -> left -> right', () => {
    // Arrange
    let tree = new BinaryTree();
    tree.root = new Node(20);
    tree.root.left = new Node(100);
    tree.root.left.left = new Node(200);
    tree.root.left.right = new Node(50);
    tree.root.right = new Node(75);
    tree.root.right.right = new Node(62);
    tree.root.right.left = new Node(10);

    // Act
    let results = tree.preOrder();

    // Assert
    expect(results).toEqual([20,100,200,50,75,10,62]);
  });
});
