function dfsTraversal(matrix, startNode) {
  const visited = new Array(matrix.length).fill(false); // Track visited nodes
  const result = []; // Store DFS traversal order

  function dfs(node) {
    visited[node] = true;
    result.push(node);

    // Explore all neighbors of the current node
    for (let neighbor = 0; neighbor < matrix[node].length; neighbor++) {
      if (matrix[node][neighbor] === 1 && !visited[neighbor]) {
        dfs(neighbor);
      }
    }
  }

  dfs(startNode);
  return result;
}

const graph = [
  [0, 1, 1, 0],
  [1, 0, 1, 1],
  [1, 1, 0, 1],
  [0, 1, 1, 0],
];
const startNode = 0;
console.log(dfsTraversal(graph, startNode)); // Output: [0, 1, 2, 3]
