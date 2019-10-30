'use strict';

const leftJoin = require('./left-join');
const HashTable = require('../hash-table');

describe('left join tests', () => {
  it('can return a hash table with words and matching synonyms', () => {
    // Arrange
    let hashTable = new HashTable(4096);
    hashTable.add({animal: 'creature'});
    hashTable.add({pet: 'cat'});
    hashTable.add({pet: 'dog'});

    // Act
    let joined = leftJoin(hashTable);

    // Assert
    expect(joined).toEqual([['pet', 'dog'], ['animal', 'creature']]);
  });
