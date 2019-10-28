'use strict';

const repeatedWord = require('./repition');

describe('repeated words tests', () => {
  it('should return the first word that is repeated', () => {
    // Arrange
    let string = 'The young pony went over a hill until it met another large horse. The large horse killed the pony.';

    // Act
    let result = repeatedWord(string);

    // Assert
    expect(result).toBe('The');
  });
});
