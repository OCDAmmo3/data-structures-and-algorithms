'use strict';

const LinkedLists = require('../src/linked-list');

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
    list.insert(10);
    list.insert(5);
    list.insert(1);

    // Act
    list.insertBefore(10, 6);

    // Assert
    expect(list.toString()).toEqual('1,5,6,10');
  });
  it('takes existing node and new value, adds new value one step after existing node', () => {
    // Arrange
    let list = new LinkedLists();
    list.insert(10);
    list.insert(5);
    list.insert(1);

    // Act
    list.insertAfter(1, 2);

    // Assert
    expect(list.toString()).toEqual('1,2,5,10');
  });
});