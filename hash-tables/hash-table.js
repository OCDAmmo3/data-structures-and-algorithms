'use strict';

const LinkedList = require('../linkedList/src/linked-list');

class HashTable {
  constructor(count) {
    this.storage = [];
    this.bucketCount = count || 1024;
  }

  add(object) {
    if(!object || typeof object !== 'object') {
      return 'Invalid object';
    }
    let hashedKey = this.hashMethod(Object.keys(object)[0]);
    if(!this.storage[hashedKey]) {
      this.storage[hashedKey] = new LinkedList();
    }
    this.storage[hashedKey].insert(object);
    return this.storage[hashedKey].head;
  }

  get(key) {
    if(!key) {
      return 'Invalid string';
    }
    let current;
    let hashedKey = this.hashMethod(key);
    if(this.storage[hashedKey]) {
      current = this.storage[hashedKey].head;
    } else {
      current = null;
    }
    while(current) {
      if(current.value[key]) {
        return current.value;
      }
      current = current.next;
    }
    return current;
  }

  contains(key) {
    if(!key) {
      return 'Invalid string';
    }
    let result = this.get(key);
    if(!result) {
      return false;
    } else {
      return true;
    }
  }

  hashMethod(string) {
    if(typeof string !== 'string') {
      string.toString();
    }
    let hashNumber = 0;
    let charNumber;
    for(let i = 0; i < string.length; i++) {
      charNumber = string.charCodeAt(i);
      hashNumber = hashNumber + charNumber;
    }
    hashNumber = Math.floor((hashNumber * 599) / this.bucketCount);
    return hashNumber;
  }
}

module.exports = HashTable;
