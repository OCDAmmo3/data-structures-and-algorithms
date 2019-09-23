'use strict';

const LinkedLists = require('../src/linked-list');

describe('testing linked list', () => {
  it('should successfully create a linked list', () => {
    expect(new LinkedLists().head).toEqual(null);
  });
  it('can insert new node into linked list', () => {
    let list = new LinkedLists();
    list.insert(1);
    expect(list.head.value).toEqual(1);
  });
});

describe('testing edits of linked lists', () => {
  it('can find if a node is included in a linked list', async () => {
    // Arrange
    let list = new LinkedLists();

    // Act
    list.insert(1);
    let responseProper = await list.includes(1);
    let responseImproper = await list.includes(5);
    
    // Assert
    expect(responseProper).toEqual(true);
    expect(responseImproper).toEqual(false);
  });

  it('returns a string of all values in the list', async () => {
    // Arrange
    let list = new LinkedLists();

    // Act
    list.insert(1);
    let stringified = await list.toString();

    // Assert
    expect(stringified).toBe('1');
  })
});