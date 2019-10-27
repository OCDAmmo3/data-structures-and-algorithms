'use strict';

const HashString = require('./hash-table');

describe('Hash Table Functionality', () => {
  it('can hash an item to the table', () => {
    // Arrange
    let string = 'cheese whiz';
    let hashed = new HashString(string);

    // Act
    let rehashed = hashed.hashMethod();

    // Assert
    expect(rehashed).toBe(true);
  });
});

