'use strict';

const Graph = require('./graph');

describe('base graph method tests', () => {
  it('should add a new node to the graph', () => {
    // Arrange
    let graph = new Graph();

    // Act
    let result = graph.addNode(15);

    // Assert
    expect(result).toBe(15);
  });

  it('should add a new node if trying to add an edge between a node and another node that doesn\'t exist', () => {
    // Arrange
    let graph = new Graph();
    graph.addNode(1);
    graph.addNode(2);

    // Act
    graph.addEdge(1,3);

    // Assert
    expect(graph.lookAtThisGraph()).toBe([{value: 1, neighbors: [3]}, {value: 2, neighbors: []}, {value: 3, neighbors: [1]}]);
  });

  it('should add a new edge to the graph by adding each node to the others\' neighbor', () => {
    // Arrange
    let graph = new Graph();
    graph.addNode(15);
    graph.addNode(12);

    // Act
    graph.addEdge(12,15);

    // Assert
    expect(graph.lookAtThisGraph()).toBe([{value: 12, neighbors: [15]}])
  });

  it('should be able to get all the nodes', () => {
    // Arrange
    let graph = new Graph();
    graph.addNode(1);
    graph.addNode(2);
    graph.addNode(3);
    graph.addNode(4);

    // Act
    let results = graph.lookAtThisGraph();

    // Assert
    expect(results).toEqual([1,2,3,4]);
  });

  it('should be able to get the neighbors connected by an edge for one node', () => {
    // Arrange
    let graph = new Graph();
    graph.addNode(1);
    graph.addNode(2);
    graph.addNode(3);
    graph.addEdge(1,2);
    graph.addEdge(1,3);

    // Act
    let result = graph.getNeighbors(1);

    // Assert
    expect(result).toBe([2,3]);
  });

  it('should give a size back that is the amount of nodes in the graph', () => {
    // Arrange
    let graph = new Graph();
    graph.addNode(1);
    graph.addNode(2);
    graph.addNode(3);
    graph.addEdge(1,2);
    graph.addNode(4);
    graph.addEdge(1,4);

    // Act
    let result = graph.size;

    // Assert
    expect(result).toBe(4);
  });
});
