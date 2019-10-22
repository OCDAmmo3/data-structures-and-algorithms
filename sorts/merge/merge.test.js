'use strict';

const mergeSort = require('./merge');

describe('Merge sort tests', () => {
  it('can sort an even number of random integers', () => {
    // Arrange
    let array1 = [14,75,1234,24357,1,2,65,41];
    let array2 = [15,1,26,3];

    // Act
    let results1 = mergeSort(array1);
    let results2 = mergeSort(array2);

    // Assert
    expect(results1).toEqual([1,2,14,41,65,75,1234,24357]);
    expect(results2).toEqual([1,3,15,26]);
  });

  it('can sort an odd number of random integers', () => {
    // Arrange
    let array = [61,3,18];

    // Act
    let results = mergeSort(array);

    // Assert
    expect(results).toEqual([3,18,61]);
  });

  it('returns an empty array for a given empty array', () => {
    // Arrange
    let array = [];

    // Act
    let results = mergeSort(array);

    // Assert
    expect(results).toEqual([]);
  });

  it('returns array unchanged for an array with 1 value', () => {
    // Arrange
    let array = [1];

    // Act
    let results = mergeSort(array);

    // Assert
    expect(results).toEqual([1]);
  });
});
