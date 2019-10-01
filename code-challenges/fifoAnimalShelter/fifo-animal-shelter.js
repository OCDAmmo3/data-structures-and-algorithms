'use strict';

class Animal {
  constructor(animal) {
    this.value = animal;
    this.next = null;
    this.prev = null;
  }
}

class AnimalShelter {
  constructor() {
    this.front = null;
    this.back = null;
    this.length = 0;
  }

  enqueue(animal) {
    if(animal !== 'dog' && animal !== 'cat') {
      return null;
    }
    let pet = new Animal(animal);
    if(!this.front) {
      this.front = pet;
      this.back = pet;
      this.length++;
      return `${animal} added!`;
    } else {
      pet.prev = this.back;
      this.back.next = pet;
      this.back = pet;
      this.length++;
      return `${animal} added!`;
    }
  }

  dequeue(pref) {
    if(pref !== 'dog' && pref !== 'cat') {
      return null;
    }
    if(!this.front){
      return null;
    } else {
      let temp = this.front;
      while(temp.next) {
        if(temp !== pref) {
          temp = temp.next;
        } else {
          let temp2 = this.front;
          this.front = this.front.next;
          this.front.previous = null;
          this.length--;
          return temp2.value;
        }
      }
    }
  }

  toArray() {
    let curr = this.front;
    let listArray = [];
    while(curr) {
      listArray.push(curr.value);
      curr = curr.next;
    }
    return listArray;
  }
}

module.exports = AnimalShelter;
