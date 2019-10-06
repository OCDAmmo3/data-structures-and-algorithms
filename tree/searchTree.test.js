'use strict';

let BinarySearchTree = require('./searchTree');

describe('Binary Search Tree Tests', () => {
  it('should add a node to the proper side of the tree, smaller on left, larger on right', () => {
    // Arrange
    let tree = new BinarySearchTree();

    // Act
    tree.add(25);
    tree.add(50);
    tree.add(10);
    tree.add(100);
    tree.add(5);

    // Assert
    expect(tree.toArray()).toEqual([5,10,25,50,100]);
  });
});
