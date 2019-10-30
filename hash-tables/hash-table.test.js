'use strict';

const HashTable = require('./hash-table');

let cat = 'cat';

describe('Hash Table Functionality', () => {
  it('can hash a string', () => {
    // Arrange
    let cheese = 'cheese whiz';
    let cheeseHash = new HashTable();
    let catHash = new HashTable();

    // Act
    let hashed1 = cheeseHash.hashMethod(cheese);
    let hashed2 = catHash.hashMethod(cat);

    // Assert
    expect(hashed1).toBe(538);
    expect(hashed2).toBe(152);
  });

  it('can add a string to the table based on hash', () => {
    // Arrange
    let catHash = new HashTable();

    // Act
    let result = catHash.add({cat: cat});

    // Assert
    expect(result).toHaveProperty('value', {'cat': 'cat'});
    expect(catHash.storage[152].head).toHaveProperty('value', {'cat': 'cat'});
  });

  it('can get a value out of the table based on hash', () => {
    // Arrage
    let catHash = new HashTable();
    catHash.add({cat: cat});

    // Act
    let results = catHash.get(cat);

    // Assert
    expect(results).toEqual({cat: cat});
  });

  it('can check if a hash table contains a value', () => {
    // Arrange
    let catHash = new HashTable();
    catHash.add({cat: cat});

    // Act
    let result = catHash.contains(cat);
    let failed = catHash.contains('purple');

    // Assert
    expect(result).toBe(true);
    expect(failed).toBe(false);
  });

  it('can fail properly', () => {
    // Arrange
    let catHash = new HashTable();

    // Act
    let result = catHash.add();
    let result2 = catHash.add('asdf');

    // Assert
    expect(result).toBe('Invalid object');
    expect(result2).toBe('Invalid object');
  });
});

