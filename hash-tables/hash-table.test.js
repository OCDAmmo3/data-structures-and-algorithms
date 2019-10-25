'use strict';

const hash = require('./hash-table');

describe('Hash Table Functionality', () => {
  it('can hash an item to the table', () => {
    // Arrange
    let string = 'cheese whiz';

    // Act
    let hashed = hash(string);

    // Assert
    expect(hashed).toBe(true);
  });
});

