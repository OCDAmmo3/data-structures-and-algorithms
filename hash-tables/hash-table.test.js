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
    expect(hashed1).toBe(645);
    expect(hashed2).toBe(182);
  });

  it('can add a string to the table based on hash', () => {
    // Arrange
    let catHash = new HashTable();

    // Act
    catHash.add(cat);

    // Assert
    expect(catHash).toEqual({'182': 'cat'});
  });
});

