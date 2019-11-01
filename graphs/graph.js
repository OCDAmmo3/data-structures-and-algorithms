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

  addEdge(val1, val2) {
    if(!val1) {
      this.addNode(val1);
    }
    if(!val2) {
      this.addNode(val2);
    }
    let index1 = this.nodes.findIndex(index => index.value === val1);
    let index2 = this.nodes.findIndex(index => index.value === val2);
    console.log(this.nodes[index1].neighbors);
    this.nodes[index1].neighbors.push(val2);
    this.nodes[index2].neighbors.push(val1);
  }

  lookAtThisGraph() {
    return this.nodes;
  }
}

module.exports = Graph;
