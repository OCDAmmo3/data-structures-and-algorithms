'use strict';

const Queue = require('../stacks-and-queues/queues/queues');

class Node {
  constructor(value) {
    this.value = value;
    this.neighbors = [];
  }
}

class Edge {
  constructor(node, weight = 1) {
    this.node = node;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.nodes = [];
    this.size = this.nodes.length;
  }

  addNode(value) {
    if(!value) {
      return 'I need a value';
    }
    let node = new Node(value);
    this.nodes.push(node);
    return node;
  }

  addEdge(val1, val2, weight) {
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
    return this.nodes;
  }

  getNeighbors(value) {
    let index = this.nodes.findIndex(index => index.value === value);
    return this.nodes[index].neighbors;
  }

  breadthTraversal(start = this.nodes[0]) {
    let array = [];
    let queue = new Queue();
    let temp = start;
    temp.neighbors.forEach(neighbor => {
      if(!array.includes(neighbor)) {
        array.push(neighbor)
      }
    })
    queue.enqueue(start);
    return array;
  }
}

module.exports = Graph;
