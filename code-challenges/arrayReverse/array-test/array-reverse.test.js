'use strict';

const reverseArray = require('./array-reverse');

describe('Testing Challenge', () => {
  let arr = [1,2,3,4,5,6,7,8,9,10];
  let arr2 = ['one','two','three','four'];
  test('reverse module reverses array', () => {
    expect(reverseArray(arr)).toStrictEqual([10,9,8,7,6,5,4,3,2,1]);
    expect(reverseArray(arr2)).toStrictEqual(['four', 'three', 'two', 'one']);
    expect(reverseArray(['this'])).toStrictEqual(['this']);
    expect(reverseArray([])).toStrictEqual([]);
  })
})
