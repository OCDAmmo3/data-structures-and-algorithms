'use strict';

class AnimalShelter {
  constructor() {
    this.animal = null;
  }

  enqueue(animal) {

  }

  dequeue(pref) {
    if(pref !== dog && pref !== cat) {
      return null;
    }
  }

}
