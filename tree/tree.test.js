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
});
