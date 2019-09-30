'use strict';

const PseudoQueue = require('./queue-with-stacks');

describe('Queues Testing', () => {
  it('can enqueue a new Node on the back of the pqueue', () => {
    // Arrange
    let pqueue = new PseudoQueue();

    // Act
    pqueue.enqueue(1);
    pqueue.enqueue(2);
    pqueue.enqueue(3);
    pqueue.enqueue(4);
    pqueue.enqueue(5);

    // Assert
    expect(pqueue.toArray()).toEqual([1,2,3,4,5]);
    expect(pqueue.length).toBe(5);
  });

  it('dequeue returns nothing if list is empty', () => {
    // Arrange
    let pqueue =  new PseudoQueue();

    // Act
    let dqd = pqueue.dequeue();

    // Assert
    expect(dqd).toBeUndefined();
  })

  it('can dequeue a Node from the front of the pqueue', () => {
    // Arrange
    let pqueue = new PseudoQueue();
    pqueue.enqueue(1);
    pqueue.enqueue(2);
    pqueue.enqueue(3);
    pqueue.enqueue(4);

    // Act
    let dqd1 = pqueue.dequeue();
    let d1d2 = pqueue.dequeue();

    // Assert
    expect(dqd1).toBe(1);
    expect(d1d2).toBe(2);
    expect(pqueue.toArray()).toEqual([3,4]);
    expect(pqueue.length).toBe(2);
  });

});
