'use strict';

let Stack = require('./stacks');

describe('Stacks Testing', () => {
  it('can push a new Node on top of the stack', () => {
    // Arrange
    let stack = new Stack();

    // Act
    stack.push(1);
    stack.push(2);

    // Assert
    expect(stack.top).toHaveProperty('value', 2);
    expect(stack.length).toBe(2);
    expect(stack.toString()).toBe('21')
  });

  it('can pop a Node off the top of the stack', () => {
    // Arrange
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);

    // Act
    let popped1 = stack.pop();
    let popped2 = stack.pop();

    // Assert
    expect(popped1).toBe(4);
    expect(popped2).toBe(3);
    expect(stack.top).toHaveProperty('value', 2);
    expect(stack.length).toBe(2);
    expect(stack.toString()).toBe('21');
  });

  it('returns the value of the top of the stack', () => {
    // Arrange
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);

    // Act
    let top = stack.peek();

    // Assert
    expect(top).toBe(4);
  })
});
