'use strict';

let Stack = require('../../stacks-and-queues/stacks/stacks');

let multiBracketValidation = input => {
  let stack = new Stack();
  let half = Math.floor(input.length / 2);
  let map = {
    '{': '}',
    '[': ']',
    '(': ')',
  }
  for (var i = 0; i < half; i++) {
    stack.push(input.charAt(i));
  }
  let peeked = stack.peek();
  let counter = 0;
  if(half === 0) {
    return false;
  }
  while(stack.length > 1) {
    while(counter < 3) {
      if(peeked === Object.keys(map)[counter] && Object.keys(map)[counter].value === Object.values(map)[counter]) {
        stack.pop();
        break;
      } else {
        counter++;
      }
      stack--;
    }
  }
  return true;
}

module.exports = multiBracketValidation;
