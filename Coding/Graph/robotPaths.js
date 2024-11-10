const robotPaths = (grid) => {
  const rows = grid.length;
  const cols = grid[0].length;
  const paths = [];

  const backtrack = (row, col, path) => {
    if (row >= rows || col >= cols || grid[row][col] === 1) {
      return;
    }

    path.push([row, col]);

    if (row === rows - 1 && col === cols - 1) {
      paths.push([...path]);
    } else {
      backtrack(row, col + 1, path);
      backtrack(row + 1, col, path);
    }
    /* Backtrack ->  Backtracking is a technique where, after exploring all possible paths
     from a given point, you undo the last move to return to the previous 
     state and explore alternative routes */
    path.pop();
  };

  backtrack(0, 0, []);
  return paths;
};

const grid = [
  [0, 0, 0],
  [1, 0, 0],
  [0, 0, 0],
];

const robotPossiblePaths = robotPaths(grid);
console.log(robotPossiblePaths, robotPossiblePaths.length);
