'use strict';

const LinkedLists = require('../src/linked-list');
const mergeLists = require('../../code-challenges/llMerge/ll-merge');

describe('testing linked list', () => {
  it('should successfully create a linked list', () => {
    let list = new LinkedLists();
    expect(list.head).toEqual(null);
  });
  it('can insert new node into linked list', () => {
    let list = new LinkedLists();
    list.insert(1);
    list.insert(2);
    expect(list.head.value).toEqual(2);
    expect(list.head.next.value).toEqual(1);
  });
});

describe('testing edits of linked lists', () => {
  it('can find if a node is included in a linked list', () => {
    // Arrange
    let list = new LinkedLists();

    // Act
    list.insert(1);
    let responseProper = list.includes(1);
    let responseImproper = list.includes(5);

    // Assert
    expect(responseProper).toEqual(true);
    expect(responseImproper).toEqual(false);
  });

  it('returns a string of all values in the list', () => {
    // Arrange
    let list = new LinkedLists();

    // Act
    list.insert(1);
    list.insert(2);

    // Assert
    expect(list.head.value).toBe(2);
    expect(list.toString()).toEqual('2,1');
  });

  it('takes in a value and adds it to the end of the list', () => {
    // Arrange
    let list = new LinkedLists();
    list.insert(1);
    list.insert(2);

    // Act
    list.append(5);

    // Assert
    expect(list.head.value).toEqual(2);
    expect(list.head.next.next.value).toEqual(5);
  });

  it('takes existing node and new value, adds new value one step before existing node', () => {
    // Arrange
    let list = new LinkedLists();
    list.insert(15);
    list.insert(10);
    list.insert(5);
    list.insert(1);

    // Act
    list.insertBefore(10, 6);

    // Assert
    expect(list.toString()).toEqual('1,5,6,10,15');
  });

  it('takes existing node and new value, adds new value one step after existing node', () => {
    // Arrange
    let list = new LinkedLists();
    list.insert(15);
    list.insert(10);
    list.insert(5);
    list.insert(1);

    // Act
    list.insertAfter(1, 2);

    // Assert
    expect(list.toString()).toEqual('1,2,5,10,15');
  });

  it('takes a number and returns the value of that number node from the end', () => {
    // Arrange
    let list = new LinkedLists();
    list.insert(30);
    list.insert(25);
    list.insert(20);
    list.insert(15);
    list.insert(10);
    list.insert(5);
    list.insert(1);
    list.insert(0);

    // Act
    let result = list.kthFromEnd(3);

    // Assert
    expect(result).toEqual(20);
  });

  it('takes a number and returns with error when looking through empty list', () => {
    // Arrange
    let list = new LinkedLists();

    // Act + Assert
    expect(() => {
      list.kthFromEnd(3);
    }).toThrow('Error, there is no list here.');
  });

  it('takes a number and returns with error when looking for number longer than list length', () => {
    // Arrange
    let list = new LinkedLists();
    list.insert(5);
    list.insert(1);

    // Act + Assert
    expect(() => {
      list.kthFromEnd(3);
    }).toThrow('Error, there is no list here.');
  });

  it('takes in 2 equal length lists and merges them together, returning one list with the nodes from each alternating between the two', () => {
    // Arrange
    let list1 = new LinkedLists();
    let list2 = new LinkedLists();
    list1.insert(25);
    list1.insert(23);
    list1.insert(21);
    list1.insert(19);
    list1.insert(17);
    list1.insert(15);
    list2.insert(24);
    list2.insert(22);
    list2.insert(20);
    list2.insert(18);
    list2.insert(16);
    list2.insert(14);

    // Act
    let merged = mergeLists(list1, list2);

    // Assert
    expect(list1.toString()).toBe('15,17,19,21,23,25');
    expect(list2.toString()).toBe('14,16,18,20,22,24');
    expect(merged.toString()).toBe('15,14,17,16,19,18,21,20,23,22,25,24');
  });

  it('takes in 2 different length lists and merges them together, returning one list with the nodes from each alternating between the two', () => {
    // Arrange
    let list1 = new LinkedLists();
    let list2 = new LinkedLists();
    list1.insert(25);
    list1.insert(20);
    list1.insert(15);
    list1.insert(5);
    list1.insert(0);
    list2.insert(10);
    list2.insert(1);

    // Act
    let merged = mergeLists(list1, list2);

    // Assert
    expect(list1.toString()).toBe('0,5,15,20,25');
    expect(list2.toString()).toBe('1,10');
    expect(merged.toString()).toBe('0,1,5,10,15,20,25');
  });
});
