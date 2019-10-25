'use strict';

const hash = require('./hash-table');

describe('Hash Table Functionality', () => {
  it('can hash an item to the table', () => {
    // Arrange
    let string = 'cheese whiz';

    // Act
    let hashed = hash(string);
    let hashedNum = hash(4);
    let hashedNull = hash(null);

    // Assert
    expect(hashed).toBe(true);
    expect(hashedNum).toBe(true);
    expect(hashedNull).toBe(false);
  });
});
