function dfsTraversalIterative(matrix, startNode) {
  const visited = new Array(matrix.length).fill(false); // Track visited nodes
  const stack = [startNode]; // Stack for DFS
  const result = []; // Store DFS traversal order

  while (stack.length > 0) {
    const currentNode = stack.pop(); // Pop a node from the stack

    if (!visited[currentNode]) {
      visited[currentNode] = true; // Mark as visited
      result.push(currentNode);

      // Push all neighbors onto the stack (in reverse order for correct order)
      for (
        let neighbor = matrix[currentNode].length - 1;
        neighbor >= 0;
        neighbor--
      ) {
        if (matrix[currentNode][neighbor] === 1 && !visited[neighbor]) {
          stack.push(neighbor);
        }
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
console.log(dfsTraversalIterative(graph, startNode)); // Output: [0, 2, 3, 1]
