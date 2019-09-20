'use strict';

const LinkedLists = require('../src/linked-list.js');

describe('insert function', () => {

  it('should insert new node into first spot in the list', () => {

    let list = new LinkedLists();
    
    list.insert(1);
    
    expect(list.head).not.toBeNull();
  });

});