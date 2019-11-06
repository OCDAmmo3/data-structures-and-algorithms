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
    this.size = 0;
  }

  addNode(value) {
    if(!value) {
      return 'I need a value';
    }
    let node = new Node(value);
    this.nodes.push(node);
    this.size++;
    return node.value;
  }

  addEdge(val1, val2) {
    let temp = [];
    this.nodes.forEach(value => {
      temp.push(Object.values(value)[0]);
    });
    if(!temp.includes(val1)) {
      this.addNode(val1);
    }
    if(!temp.includes(val2)) {
      this.addNode(val2);
    }
    let index1 = this.nodes.findIndex(index => index.value === val1);
    let index2 = this.nodes.findIndex(index => index.value === val2);
    this.nodes[index1].neighbors.push(val2);
    this.nodes[index2].neighbors.push(val1);
  }

  lookAtThisGraph() {
    let array = [];
    this.nodes.forEach(node => {
      array.push(node.value);
    });
    return array;
  }

  getNeighbors(value) {
    let index = this.nodes.findIndex(index => index.value === value);
    return this.nodes[index].neighbors;
  }

  breadthTraversal(start = this.nodes[0]) {
    let array = [];
    array.push(start.value);
    let temp = start;
    temp.neighbors.forEach(neighbor => {
      if(!array.includes(neighbor)) {
        array.push(neighbor)
      }
    })
    return array;
  }
}

module.exports = Graph;
