import Graph from '../src/graph.js';

describe('Graph', () => {

  let graph = new Graph();

  afterEach(() => {
    graph = new Graph();
  });

  test('should correctly instantiate a graph', () => {
    expect(graph.adjacencyList.size).toEqual(0);
  });

  test('should add a new node', () => {
    graph.addNode("Jasmine");
    expect(graph.adjacencyList.get("Jasmine").size).toEqual(0);
  });

  test('should return false if the node does not exist in the adjacency list', () => {
    expect(graph.hasNode("Ada")).toEqual(false);
  });

  test('check to see if node exists in graph', () => {
    graph.addNode("Jasmine");
    expect(graph.hasNode("Jasmine")).toEqual(true);
  });

  test('add an edge between two nodes', () => {
    graph.addNode("Jasmine");
    graph.addNode("Ada");
    graph.createEdge("Jasmine", "Ada");
    expect(graph.hasEdge("Ada", "Jasmine")).toEqual(true);
  });

  test('check to see if edge exists in graph', () => {
    graph.addNode("Jasmine");
    graph.addNode("Ada");
    expect(graph.hasEdge("Jasmine", "Ada")).toEqual(false);
  });
});