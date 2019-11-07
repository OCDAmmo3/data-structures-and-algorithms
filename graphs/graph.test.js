'use strict';

const Graph = require('./graph');

describe('base graph method tests', () => {
  it('should add a new node to the graph', () => {
    // Arrange
    let graph = new Graph();

    // Act
    let result = graph.addNode(15);

    // Assert
    expect(result).toHaveProperty('value', 15);
  });

  it('should add a new node if trying to add an edge between a node and another node that doesn\'t exist', () => {
    // Arrange
    let graph = new Graph();
    graph.addNode(1);
    graph.addNode(2);

    // Act
    graph.addEdge(1,3);
    let result = graph.lookAtThisGraph();

    // Assert
    expect(result[0]).toHaveProperty('value', 1);
    expect(result[0]).toHaveProperty('neighbors', [3]);
  });

  it('should add a new edge to the graph by adding each node to the others\' neighbor', () => {
    // Arrange
    let graph = new Graph();
    graph.addNode(15);
    graph.addNode(12);

    // Act
    graph.addEdge(12,15);
    let result = graph.lookAtThisGraph();

    // Assert
    expect(result[0]).toHaveProperty('value', 15);
    expect(result[0]).toHaveProperty('neighbors', [12]);
    expect(result[1]).toHaveProperty('value', 12);
    expect(result[1]).toHaveProperty('neighbors', [15]);
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
    expect(results[0]).toEqual({value: 1, neighbors: []});
    expect(results[1]).toEqual({value: 2, neighbors: []});
    expect(results[2]).toEqual({value: 3, neighbors: []});
    expect(results[3]).toEqual({value: 4, neighbors: []});
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
    expect(result).toEqual([2,3]);
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
    let result = graph.nodes.length;

    // Assert
    expect(result).toBe(4);
  });

  it('should give a breadth first search for a graph', () => {
    // Arrange
    let graph = new Graph();
    graph.addNode(1);
    graph.addNode(2);
    graph.addNode(3);
    graph.addNode(4);
    graph.addNode(5);
    graph.addNode(6);
    graph.addEdge(1,4);
    graph.addEdge(1,5);
    graph.addEdge(4,2);
    graph.addEdge(4,3);
    graph.addEdge(6,5);
    graph.addEdge(2,3);
    graph.addEdge(3,5);

    // Act
    let result = graph.breadthTraversal();

    // Assert
    expect(result).toEqual([1,4,5,2,3,6]);
  });

  it('should return an array with the values in depth first order', () => {
    // Arrange
    let graph = new Graph();
    graph.addNode(1);
    graph.addNode(2);
    graph.addNode(3);
    graph.addNode(4);
    graph.addNode(5);
    graph.addEdge(1,5);
    graph.addEdge(2,4);
    graph.addEdge(2,3);
    graph.addEdge(3,5);

    // Act
    let result = graph.depthTraversal();

    // Assert
    expect(result).toEqual([1,5,3,2,4]);
  });
});
