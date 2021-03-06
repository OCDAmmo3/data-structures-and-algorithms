'use strict';

let AnimalShelter = require('./fifo-animal-shelter');

let dog = 'dog';
let cat = 'cat';
let pig = 'pig';
let horse = 'horse';

describe('Animal Shelter Queue', () => {
  it('can make an array of the animals in the animal shelter', () => {
    // Arrange
    let shelter = new AnimalShelter();
    shelter.enqueue(dog);
    shelter.enqueue(cat);

    // Act
    let array = shelter.toArray();

    // Assert
    expect(array).toEqual([dog,cat]);
  });

  it('can take in a new animal, either cat or dog', () => {
    // Arrange
    let shelter = new AnimalShelter();

    // Act
    shelter.enqueue(dog);
    shelter.enqueue(dog);
    shelter.enqueue(cat);
    shelter.enqueue(cat);

    // Assert
    expect(shelter.toArray()).toEqual([dog, dog, cat, cat]);
    expect(shelter.length).toBe(4);
  });

  it('returns null if neither cat nor dog is given', () => {
    // Arrange
    let shelter = new AnimalShelter();

    // Act + Assert
    expect(shelter.enqueue(pig)).toBe(null);
    expect(shelter.enqueue(horse)).toBe(null);
  });

  it('returns null for attempting to remove something that isn\'t in the shelter', () => {
    // Arrange
    let shelter = new AnimalShelter();
    shelter.enqueue(cat);
    shelter.enqueue(cat);
    shelter.enqueue(cat);
    shelter.enqueue(cat);
    shelter.enqueue(dog);

    // Act + Assert
    let byecat = shelter.dequeue(cat);
    expect(byecat).toBe(cat);
    expect(shelter.toArray()).toEqual([cat,cat,cat,dog]);
    let byedog = shelter.dequeue(dog);
    expect(byedog).toBe(dog);
    expect(shelter.toArray()).toEqual([cat,cat,cat]);
    let nodog = shelter.dequeue(dog);
    expect(nodog).toBe(null);
    let nohorse = shelter.dequeue(horse);
    expect(nohorse).toBe(null);
    let nopig = shelter.dequeue(pig);
    expect(nopig).toBe(null);
    expect(shelter.length).toBe(3);
  });

  it('can take away dogs only each time, if specified', () => {
    // Arrange
    let shelter = new AnimalShelter();
    shelter.enqueue(dog);
    shelter.enqueue(dog);
    shelter.enqueue(dog);
    shelter.enqueue(dog);
    shelter.enqueue(cat);
    shelter.enqueue(cat);
    shelter.enqueue(cat);
    shelter.enqueue(cat);

    // Act
    shelter.dequeue(dog);
    shelter.dequeue(dog);
    shelter.dequeue(dog);
    shelter.dequeue(dog);

    // Assert
    expect(shelter.toArray()).toEqual([cat,cat,cat,cat]);
    expect(shelter.length).toBe(4);
  });

  it('can take away cats only each time, if specified', () => {
    // Arrange
    let shelter = new AnimalShelter();
    shelter.enqueue(dog);
    shelter.enqueue(dog);
    shelter.enqueue(dog);
    shelter.enqueue(dog);
    shelter.enqueue(cat);
    shelter.enqueue(cat);
    shelter.enqueue(cat);
    shelter.enqueue(cat);

    // Act
    shelter.dequeue(cat);
    shelter.dequeue(cat);
    shelter.dequeue(cat);
    shelter.dequeue(cat);

    // Assert
    expect(shelter.toArray()).toEqual([dog,dog,dog,dog]);
    expect(shelter.length).toBe(4);
  });
});
