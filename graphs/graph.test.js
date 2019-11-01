'use strict';

const Graph = require('./graph');

describe('base graph method tests', () => {
  it('should add a new node to the graph', () => {
    // Arrange
    let graph = new Graph();

    // Act
    graph.add(15);

    // Assert
    expect(graph.lookAtThisGraph()).toEqual([15]);
  });

  it('should add a new edge to the graph by adding each node to the others\' neighbor', () => {

  });

  it('should be able to get all the nodes', () => {
    // Arrange
    let graph = new Graph();
    graph.add(1);
    graph.add(2);
    graph.add(3);
    graph.add(4);

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
