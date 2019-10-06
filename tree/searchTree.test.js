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
    tree.add(15);
    tree.add(30);

    // Assert
    expect(tree.root.value).toBe(25);
    expect(tree.root.left.value).toBe(10);
    expect(tree.root.left.left.value).toBe(5);
    expect(tree.root.left.right.value).toBe(15);
    expect(tree.root.right.value).toBe(50);
    expect(tree.root.right.right.value).toBe(100);
    expect(tree.root.right.left.value).toBe(30);
  });

  it('should return true for a value that is included in the tree', () => {
    // Arrange
    let tree = new BinarySearchTree();
    tree.add(25);
    tree.add(50);
    tree.add(10);

    // Act
    let result = tree.contains(25);

    // Assert
    expect(result).toBe(true);
  });

  it('should return false for a value that is not included in the tree', () => {
    // Arrange
    let tree = new BinarySearchTree();
    tree.add(25);
    tree.add(50);
    tree.add(10);

    // Act
    let result = tree.contains(5);

    // Assert
    expect(result).toBe(false);
  });
});
