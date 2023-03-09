import Graph from '../src/graph.js';

describe('depth-first search', () => {

  let graph = new Graph();
  graph.addNode("Jasmine");
  graph.addNode("Ada");
  graph.addNode("Lydia");
  graph.addNode("Rose");
  graph.addNode("Dylan");
  graph.addNode("Allison");
  graph.addNode("Thomas");
  graph.addNode("Sarah");
  graph.createEdge("Jasmine", "Ada");
  graph.createEdge("Jasmine", "Lydia");
  graph.createEdge("Jasmine", "Rose");
  graph.createEdge("Ada", "Dylan");
  graph.createEdge("Lydia", "Ada");
  graph.createEdge("Dylan", "Allison");
  graph.createEdge("Lydia", "Thomas");

  test('should return false if the target node doe not exist', () => {
    expect(graph.depthFirstReachable("Jasmine", "Albert")).toEqual(false);
  });

  test('should return false if the starting node doe not exist', () => {
    expect(graph.depthFirstReachable("Albert", "Thomas")).toEqual(false);
  });
});