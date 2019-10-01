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
    if(!this.front) {
      return null;
    } else {
      let stepper = this.front;
      while(stepper) {
        if(stepper.value === pref) {
          let result = stepper.value;
          this.front = this.front.next;
          this.front.previous = null;
          this.length--;
          return result.value;
        }
        if(stepper.value !== pref) {
          if(!stepper.next) {
            return null;
          }
          if(stepper.next) {
            stepper = stepper.next;
          }
        }
      }
    }
  }

  toArray() {
    let stepper = this.front;
    let listArray = [];
    while(stepper) {
      listArray.push(stepper.value);
      stepper = stepper.next;
    }
    return listArray;
  }
}

module.exports = AnimalShelter;
