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
    list.insert(2);
    let responseProper = list.includes(1);
    let responseImproper = list.includes(5);

    // Assert
    expect(responseProper).toEqual(true);
    expect(responseImproper).toEqual(false);
  });

  it('can find if a node is included in a linked list using a function', () => {
    // Arrange
    let list = new LinkedLists();

    // Act
    list.insert(1);
    list.insert(2);
    let responseProper = list.find(value => value === 1);
    let responseImproper = list.find(value => value === 5);

    // Assert
    expect(responseProper).toEqual(true);
    expect(responseImproper).toEqual(false);
  });

  it('can replace a node in a linked list using a function', () => {
    // Arrange
    let list = new LinkedLists();

    // Act
    list.insert(1);
    list.insert(2);
    let responseProper = list.find(value => value === 1, 3);
    let responseImproper = list.find(value => value === 5);

    // Assert
    expect(responseProper).toEqual(true);
    expect(list.toString()).toEqual('2,3')
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

  it('takes in 2 different length lists and merges them together, returning one list with the nodes from each alternating between the two', () => {
    // Arrange
    let list1 = new LinkedLists();
    let list2 = new LinkedLists();
    let list3 = new LinkedLists();
    let list4 = new LinkedLists();
    list1.insert(25);
    list1.insert(20);
    list1.insert(15);
    list2.insert(10);
    list2.insert(1);
    list3.insert(5);

    // Act
    let merged = mergeLists(list1, list1);
    let merged1 = mergeLists(list1, list2);
    let merged2 = mergeLists(list1, list3);
    let merged3 = mergeLists(list1, list4);
    let merged4 = mergeLists(list2, list3);
    let merged5 = mergeLists(list2, list4);
    let merged6 = mergeLists(list3, list4);
    let merged7 = mergeLists(list4, list4);

    // Assert
    expect(list1.toString()).toBe('15,20,25');
    expect(list2.toString()).toBe('1,10');
    expect(list3.toString()).toBe('5');
    expect(list4.head).toBe(null);
    expect(merged.toString()).toBe('15,15,20,20,25,25');
    expect(merged1.toString()).toBe('15,1,20,10,25');
    expect(merged2.toString()).toBe('15,5,20,25');
    expect(merged3.toString()).toBe('15,20,25');
    expect(merged4.toString()).toBe('1,5,10');
    expect(merged5.toString()).toBe('1,10');
    expect(merged6.toString()).toBe('5');
    expect(merged7.toString()).toBe('');
  });
});
