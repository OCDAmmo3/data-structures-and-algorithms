'use strict';

const Tree = require('../../tree/searchTree');
const compareTrees = require('./tree-intersection');

const buildTree = (tree) => {
  tree.add(1);
  tree.add(2);
  tree.add(3);
  tree.add(4);
  tree.add(5);
}

describe('tree intersecting tests', () => {
  it('can return an array of values that intersect between 2 trees', () => {
    // Arrange
    let tree1 = new Tree();
    let tree2 = new Tree();
    buildTree(tree1);
    buildTree(tree2);
    tree1.add(12);
    tree1.add(50);
    tree1.add(15);
    tree2.add(15);
    tree2.add(10);
    tree2.add(60);
    let array1 = tree1.preOrder();
    let array2 = tree2.preOrder();

    // Act
    let result = compareTrees(array1, array2);

    // Assert
    expect(result).toEqual([1,2,3,4,5,15]);
    expect(tree1.root).toHaveProperty('value', 1);
  });
});
