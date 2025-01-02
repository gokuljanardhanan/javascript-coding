//TOPICS: Graph, Breadth First Search
//Time complexity: O(n^2), where n is the number of rows and columns in the grid
//Space complexity: O(n^2), where n is the number of rows and columns in the grid
var shortestPathBinaryMatrix = function (grid) {
  const n = grid.length;
  const queue = [];
  if (grid[0][0] === 1 || grid[n - 1][n - 1] === 1) return -1;
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
    [1, 1],
    [1, -1],
    [-1, 1],
    [-1, -1],
  ];

  queue.push([0, 0, 1]);
  grid[0][0] = 1;

  while (queue.length) {
    const [x, y, pathLength] = queue.shift();
    if (x === n - 1 && y === n - 1) {
      return pathLength;
    }
    for (let [dx, dy] of directions) {
      const newx = x + dx;
      const newy = y + dy;
      if (
        newx >= 0 &&
        newx < n &&
        newy >= 0 &&
        newy < n &&
        grid[newx][newy] !== 1
      ) {
        queue.push([newx, newy, pathLength + 1]);
        grid[newx][newy] = 1;
      }
    }
  }
  return -1;
};

/*
Given an n x n binary matrix grid, return the length of the shortest clear path in the matrix. If there is no clear path, return -1.

A clear path in a binary matrix is a path from the top-left cell (i.e., (0, 0)) to the bottom-right cell (i.e., (n - 1, n - 1)) such that:

All the visited cells of the path are 0.
All the adjacent cells of the path are 8-directionally connected (i.e., they are different and they share an edge or a corner).
The length of a clear path is the number of visited cells of this path.
*/
