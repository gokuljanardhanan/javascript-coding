const short = (grid) => {
  const rows = grid.length;
  const cols = grid[0].length;
  const paths = [];

  const backtrack = (row, col, path) => {
    console.log(row, col, path);
    if (
      row >= rows ||
      row < 0 ||
      col >= cols ||
      col < 0 ||
      grid[row][col] === 1
    ) {
      return;
    }
    path.push([row, col]);

    if (row === rows - 1 && col === cols - 1) {
      paths.push([...path]);
    } else {
      backtrack(row, col + 1, path);
      backtrack(row + 1, col, path);
      //   backtrack(row - 1, col, path);
      //   backtrack(row, col - 1, path);
    }
    path.pop();
  };

  backtrack(0, 0, []);
  return paths;
};

const grid = [
  [0, 1, 0],
  [0, 0, 0],
  [1, 1, 0],
];

console.log(short(grid));
