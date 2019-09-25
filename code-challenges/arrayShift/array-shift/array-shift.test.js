'use strict';

const shiftArray = require('./array-shift');

describe('should return array with value included in middle index', () => {

  let addValue = 15;
  let arrEven = [1,2,3,4];
  let arrOdd = [1,2,3,4,5];
  let arrSingle = [1];
  let arrEmpty = [];
  let arrStrings = ['this','that','those','them'];
  let arrInvString = 'string';
  let arrInvNum = 24;
  let arrInvObj = {name: 'charlie'};

  test('Even array elements', () => {
    expect(shiftArray(arrEven, addValue)).toEqual([1,2,15,3,4]);
  });

  test('Odd array elements', () => {
    expect(shiftArray(arrOdd, addValue)).toEqual([1,2,3,15,4,5]);
  });

  test('Single array element', () => {
    expect(shiftArray(arrSingle, addValue)).toEqual([1,15]);
  });

  test('No array elements', () => {
    expect(shiftArray(arrEmpty, addValue)).toEqual([15]);
  });

  test('String array elements', () => {
    expect(shiftArray(arrStrings, addValue)).toEqual(['this','that',15,'those','them']);
  });

  test('Invalid array - string', () => {
    expect(shiftArray(arrInvString, addValue)).toBe(false);
  });

  test('Invalid array - number', () => {
    expect(shiftArray(arrInvNum, addValue)).toBe(false);
  });

  test('Invalid array - object', () => {
    expect(shiftArray(arrInvObj, addValue)).toBe(false);
  });

});
