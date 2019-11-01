'use strict';

const Graph = require('./graph');

describe('base graph method tests', () => {
  it('should add a new node to the graph', () => {
    // Arrange
    let graph = new Graph();

    // Act
    let result = graph.lookAtThisGraphsNewNode(15);

    // Assert
    expect(result).toBe(15)
    expect(graph.lookAtThisGraph()).toEqual([15]);
  });

  it('should add a new edge to the graph by adding each node to the others\' neighbor', () => {
    // Arrange
    let graph = new Graph();
    graph.lookAtThisGraphsNewNode(15);
    graph.lookAtThisGraphsNewNode(12);

    // Act
    graph.lookAtThisGraphsNewEdge(12, 15);

    // Assert
    expect(graph.lookAtThisGraph()).toBe([{value: 12, neighbors: [{value: 15, neighbors: 15}]}])
  });

  it('should be able to get all the nodes', () => {
    // Arrange
    let graph = new Graph();
    graph.lookAtThisGraphsNewNode(1);
    graph.lookAtThisGraphsNewNode(2);
    graph.lookAtThisGraphsNewNode(3);
    graph.lookAtThisGraphsNewNode(4);

    // Act
    let results = graph.lookAtThisGraph();

    // Assert
    expect(results).toEqual([1,2,3,4]);
  });

  it('should be able to get the neighbors connected by an edge for one node', () => {

  });

  it('should give a size back that is the amount of nodes in the graph', () => {

  });
});
