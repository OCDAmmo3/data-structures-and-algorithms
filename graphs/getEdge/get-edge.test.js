'use strict';

const getEdge = require('./get-edge');
const Graph = require('../graph');

describe('Edge path tests', () => {
  it('can take in a graph and an array of nodes and return a boolean and number', () => {
    // Arrange
    let graph = new Graph();
    graph.addNode(5);
    graph.addNode(2);
    graph.addNode(3);
    graph.addEdge(5,3,3);
    graph.addEdge(5,2,3);
    let array = [2,3];

    // Act
    let result = getEdge(graph, array);

    // Assert
    expect(result).toEqual('true, 6');
  });
});
