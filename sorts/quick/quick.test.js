'use strict';

const quickSort = require('./quick');

describe('Quick Sort Tests', () => {
  it('should sort a list of any number', () => {
    // Arrange
    let array1 = [23,15,74,34,86,165,48,512,43,1,4];
    let array2 = [12,71,43,4];
    let array3 = [5];
    let array4 = [];

    // Act
    let results1 = quickSort(array1, 0, array1.length - 1);
    let results2 = quickSort(array2, 0, array2.length - 1);
    let results3 = quickSort(array3, 0, array3.length - 1);
    let results4 = quickSort(array4, 0, array4.length - 1);

    // Assert
    expect(results1).toEqual([1,4,15,23,34,43,48,74,86,165,512]);
    expect(results2).toEqual([4,12,43,71]);
    expect(results3).toEqual([5]);
    expect(results4).toEqual([]);
  });
});
