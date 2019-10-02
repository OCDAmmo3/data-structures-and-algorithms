'use strict';

let mbv = require('./multi-bracket-validation');

describe('Multi Brack Validator', () => {
  it.each([
    // Arrange
    [true, '{}'],
    [true, '()'],
    [true, '[]'],
    [true, '[{()}]'],
    [false, '[('],
    [false, '['],
    [false, '({[}])'],
    [false, '[[[[]]]'],
  ])('should return %s for %s', (expectedResult, string) => {
    // Act
    let result = mbv(string);

    // Assert
    expect(result).toBe(expectedResult);
  });

});
