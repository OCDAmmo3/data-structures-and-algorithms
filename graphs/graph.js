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
    this.nodes = new Map();
  }

  addNode(value) {
    if(!value) {
      return 'I need a value';
    }
    let node = new Node(value);
    this.nodes.set(node, []);
    return node;
  }

  addEdge(val1, val2, weight = 1) {
    let node1 = new Node(val1);
    let node2 = new Node(val2);
    if(!this.nodes.has(node1)) {
      this.addNode(val1);
    }
    if(!this.nodes.has(node2)) {
      this.addNode(val2);
    }
    let index1 = this.nodes.get(node1);
    index1.push(new Edge(node2, weight));
    let index2 = this.nodes.get(node2);
    index2.push(new Edge(node1, weight));
  }

  lookAtThisGraph() {
    return this.nodes;
  }

  getNeighbors(value) {
    let node = new Node(value);
    if(!this.nodes.has(node)) {
      this.addNode(value);
    }
    return [...this.nodes.get(node)];
  }

  breadthTraversal(start = this.nodes[0]) {
    if(!start) {
      return 'I need a node to start at.';
    }
    let array = [];
    let visited = new Set();
    array.push(start);
    visited.add(start);
    while(array.length) {
      let current = array.shift();
      console.log(current);
      let neighbors = this.getNeighbors(current);
      for(let neighbor of neighbors) {
        let neighborNode = neighbor.node;
        if(visited.has(neighborNode)) {
          continue;
        } else {
          visited.add(neighborNode);
        }
        array.push(neighborNode);
      }
    }
    return array;
  }

  depthTraversal(start = this.nodes[0]) {
    if(!start) {
      return 'I need a node.';
    }
    let array = [];
    let visited = new Set();
    array.push(start);
    visited.add(start);
  }
}

module.exports = Graph;
