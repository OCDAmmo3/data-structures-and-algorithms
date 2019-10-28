'use strict';

class HashTable {
  constructor(string) {
    this.string = string;
  }

  hashMethod() {
    if(typeof this.string !== 'string') {
      this.string.toString();
    }
    let hashNumber = 0;
    let charNumber;
    for(let i = 0; i < this.string.length; i++) {
      charNumber = this.string.charCodeAt(i);
      hashNumber = hashNumber + charNumber;
    }
    hashNumber = Math.floor((hashNumber * 599) / 1024);
    return hashNumber;
  }
}

module.exports = HashTable;
