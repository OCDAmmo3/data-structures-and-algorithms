'use strict';

let Stack = require('../../stacks-and-queues/stacks/stacks');

let multiBracketValidation = input => {
  let stack = new Stack();
  let half = Math.floor(input.length / 2);
  for (var i = 0; i < input.length; i++) {
    stack.push(input.charAt(i));
  }
  return stack.toString();
}

module.exports = multiBracketValidation;
