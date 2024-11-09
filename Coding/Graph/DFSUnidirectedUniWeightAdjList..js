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

  addEdges(vertex1, vertex2) {
    this.adjascencyList[vertex1].push(vertex2);
    this.adjascencyList[vertex2].push(vertex1);
  }

  display() {
    for (let node in this.adjascencyList) {
      console.log(`${node} -> ${this.adjascencyList[node].join(" ")}`);
    }
  }

  dfs(node) {
    const stack = [node];
    const visited = {};
    const result = [];
    visited[node] = true;

    while (stack.length) {
      const item = stack.pop();
      result.push(item);
      for (let neighbor of this.adjascencyList[item]) {
        if (!visited[neighbor]) {
          visited[neighbor] = neighbor;
          stack.push(neighbor);
        }
      }
    }
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

const bfsResult = graph.dfs("A");
console.log(bfsResult); // ["A", "C", "E", "F", "D", "B"]
