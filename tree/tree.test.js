'use strict';

let BinaryTree = require('./tree');

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
    let results = tree.preOrder(tree.root);

    // Assert
    expect(results).toEqual([20,100,200,50,75,10,62]);
  });

  it('should return an array with the values in in-order, left -> root -> right', () => {
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
    let results = tree.inOrder(tree.root);

    // Assert
    expect(results).toEqual([200,100,50,20,10,75,62]);
  });

  it('should return an array with the values in post-order, left -> right -> root', () => {
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
    let results = tree.postOrder(tree.root);

    // Assert
    expect(results).toEqual([200,50,100,10,62,75,20]);
  });
});
