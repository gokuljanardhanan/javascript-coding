//Undirected Unweighted Graph : Using Adjascency List and BFS for traversal

class Graph {
  constructor() {
    this.adjascencyList = {};
  }

  addVertex(node) {
    if (!this.adjascencyList[node]) {
      this.adjascencyList[node] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    this.adjascencyList[vertex1].push(vertex2);
    this.adjascencyList[vertex2].push(vertex1);
  }

  display() {
    for (let node in this.adjascencyList) {
      console.log(`${node} -> ${this.adjascencyList[node].join(" ")}`);
    }
  }

  bfs(node) {
    const queue = [];
    queue.push(node);
    const visited = {};
    visited[node] = true;
    const result = [];

    while (queue.length) {
      const item = queue.shift();
      result.push(item);
      for (let neighbor of this.adjascencyList[item]) {
        if (!visited[neighbor]) {
          queue.push(neighbor);
          visited[neighbor] = true;
        }
      }
    }
    return result;
  }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

const bfsResult = graph.bfs("C");
console.log("BFS Traversal:", bfsResult); // BFS Traversal: [ 'C', 'A', 'E', 'B', 'D', 'F' ]

const bfsRes = graph.bfs("A");
console.log("BFS Traversal:", bfsRes); // BFS Traversal: [ 'A', 'B', 'C', 'D', 'E', 'F' ]
