'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.neighbors = [];
  }
}

class Graph {
  constructor() {
    this.nodes = [];
  }

  addNode(value) {
    if(!value) {
      return 'I need a value';
    }
    let node = new Node(value);
    this.nodes.push(node);
    return node.value;
  }
}

module.exports = Graph;
