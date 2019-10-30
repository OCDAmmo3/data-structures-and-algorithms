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

  it('can return a hash table with combined right and left tables', () => {
    // Arrange
    let hashTableSyn = new HashTable(4096);
    let hashTableAnt = new HashTable(4096);
    hashTableSyn.add({cat: 'feline'});
    hashTableSyn.add({dog: 'bark'});
    hashTableSyn.add({cow: 'moo'});
    hashTableAnt.add({cat: 'canine'});
    hashTableAnt.add({dog: 'meow'});
    hashTableAnt.add({horse: 'neigh'});

    // Act
    let joined = leftJoin(hashTableSyn, hashTableAnt);

    // Assert
    expect(joined).toEqual([['cat', 'feline', 'canine'], ['dog', 'bark', 'meow'], ['cow', 'moo', null]])
  });
});
