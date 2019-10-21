'use strict';

const insertionSort = require('./insertion');
const LinkedList = require('../../linkedList/src/linked-list');
const BinaryTree = require('../../tree/searchTree');
const Queue = require('../../stacks-and-queues/queues/queues');

describe('Insertion Sort', () => {
  it('can sort any type of list using an insertion sort', () => {
    // Arrange
    let array = [6,2,9,4,12,2356];
    let linkedList = new LinkedList();
    let tree = new BinaryTree();
    let queue = new Queue();

    linkedList.insert(25);
    linkedList.insert(1);
    linkedList.insert(5);
    tree.add(25);
    tree.add(1);
    tree.add(5);
    queue.enqueue(25);
    queue.enqueue(1);
    queue.enqueue(5);

    // Act
    let sortedArray = insertionSort(array);
    let sortedList = insertionSort(linkedList.toArray());
    let sortedTree = insertionSort(tree.preOrder());
    let sortedQueue = insertionSort(queue.toArray());

    // Assert
    expect(sortedArray).toEqual([2,4,6,9,12,2356]);
    expect(sortedList).toEqual([1,5,25]);
    expect(sortedTree).toEqual([1,5,25]);
    expect(sortedQueue).toEqual([1,5,25]);
  })
});
