'use strict';

let Queue = require('./queues');

describe('Queues Testing', () => {
  it('can enqueue a new Node on the back of the queue', () => {
    // Arrange
    let queue = new Queue();

    // Act
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    queue.enqueue(5);

    // Assert
    expect(queue.front).toHaveProperty('value', 1);
    expect(queue.back).toHaveProperty('value', 5);
    expect(queue.toString()).toBe('1,2,3,4,5');
    expect(queue.length).toBe(5);
  });

  it('dequeue returns nothing if list is empty', () => {
    // Arrange
    let queue =  new Queue();

    // Act
    let dqd = queue.dequeue();

    // Assert
    expect(dqd).toBeUndefined();
  })

  it('can dequeue a Node from the front of the queue', () => {
    // Arrange
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);

    // Act
    let dqd1 = queue.dequeue();
    let d1d2 = queue.dequeue();

    // Assert
    expect(dqd1).toBe(1);
    expect(d1d2).toBe(2);
    expect(queue.front).toHaveProperty('value', 3);
    expect(queue.toString()).toBe('3,4');
    expect(queue.length).toBe(2);
  });

  it('can look at the front Node and receive it\'s value', () => {
    // Arrange
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);

    // Act
    let front = queue.peek();

    // Assert
    expect(front).toBe(1);
  });
});
