function bfsTraversal(matrix, startNode) {
  const visited = new Array(matrix.length).fill(false); // Track visited nodes
  const queue = []; // Queue for BFS
  const result = []; // Store BFS traversal order

  // Start BFS from the starting node
  queue.push(startNode);
  visited[startNode] = true;

  while (queue.length > 0) {
    const currentNode = queue.shift(); // Dequeue a node
    result.push(currentNode);

    // Explore all neighbors of the current node
    for (let neighbor = 0; neighbor < matrix[currentNode].length; neighbor++) {
      if (matrix[currentNode][neighbor] === 1 && !visited[neighbor]) {
        queue.push(neighbor);
        visited[neighbor] = true; // Mark as visited
      }
    }
  }

  return result;
}

const graph = [
  [0, 1, 1, 0],
  [1, 0, 1, 1],
  [1, 1, 0, 1],
  [0, 1, 1, 0],
];
const startNode = 0;
console.log(bfsTraversal(graph, startNode)); // Output: [0, 1, 2, 3]
