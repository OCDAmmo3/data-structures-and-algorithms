'use strict';

let BinaryTree = require('./tree');

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function treeMaker(tree) {
  tree.root = new Node(20);
  tree.root.left = new Node(13);
  tree.root.left.left = new Node(5);
  tree.root.left.right = new Node(15);
  tree.root.right = new Node(62);
  tree.root.right.right = new Node(313);
  tree.root.right.left = new Node(36);
  tree.root.right.left.left = new Node(29);
  tree.root.right.left.right = new Node(45);
}

describe('Binary Trees Tests', () => {
  it('should return an array with the values in pre-order, root -> left -> right', () => {
    // Arrange
    let tree = new BinaryTree();
    treeMaker(tree);

    // Act
    let results = tree.preOrder(tree.root);

    // Assert
    expect(results).toEqual([20,13,5,15,62,36,29,45,313]);
  });

  it('should return an array with the values in in-order, left -> root -> right', () => {
    // Arrange
    let tree = new BinaryTree();
    treeMaker(tree);

    // Act
    let results = tree.inOrder(tree.root);

    // Assert
    expect(results).toEqual([5,13,15,20,29,36,45,62,313]);
  });

  it('should return an array with the values in post-order, left -> right -> root', () => {
    // Arrange
    let tree = new BinaryTree();
    treeMaker(tree);

    // Act
    let results = tree.postOrder(tree.root);

    // Assert
    expect(results).toEqual([5,15,13,29,45,36,313,62,20]);
  });

  it('should return Fizz for numbers divisible by 3, Buzz for divisible by 5, and FizzBuzz for divisible by both', () => {
    // Arrange
    let tree = new BinaryTree();
    treeMaker(tree);

    // Act
    let results = tree.fizzBuzzTree(tree.root);

    // Assert
    expect(results).toEqual(['Buzz',13,'Buzz','FizzBuzz',62,'Fizz',29,'FizzBuzz',313]);
  });

  it('should return an array with the values in breadth first order, top, left to right, down a step, left to right, continue', () => {
    // Arrange
    let tree = new BinaryTree();
    treeMaker(tree);

    // Act
    let results = tree.breadth(tree.root);

    // Assert
    expect(results).toEqual([20,13,62,5,15,36,313,29,45]);
  });

  it('should return an empty array for an empty tree', () => {
    // Arrange
    let tree = new BinaryTree();

    // Act
    let results = tree.breadth(tree.root);

    // Assert
    expect(results).toEqual([]);
  });

  it('should return an array with the single value for a tree with 1 value', () => {
    // Arrange
    let tree = new BinaryTree();
    tree.root = new Node(1);

    // Act
    let results = tree.breadth(tree.root);

    // Assert
    expect(results).toEqual([1]);
  });

  it('should return a list straight down for a tree with only left nodes or only right nodes', () => {
    // Arrange
    let treeLeft = new BinaryTree();
    let treeRight = new BinaryTree();
    treeLeft.root = new Node(1);
    treeLeft.root.left = new Node(2);
    treeLeft.root.left.left = new Node(3);
    treeLeft.root.left.left.left = new Node(4);
    treeLeft.root.left.left.left.left = new Node(5);
    treeRight.root = new Node(1);
    treeRight.root.right = new Node(2);
    treeRight.root.right.right = new Node(3);
    treeRight.root.right.right.right = new Node(4);
    treeRight.root.right.right.right.right = new Node(5);

    // Act
    let results1 = treeLeft.breadth(treeLeft.root);
    let results2 = treeRight.breadth(treeRight.root);

    // Assert
    expect(results1).toEqual([1,2,3,4,5]);
    expect(results2).toEqual([1,2,3,4,5]);
  });
});
