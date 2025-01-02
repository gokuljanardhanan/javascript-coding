function dfsGrid(matrix, startRow, startCol) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const visited = Array.from({ length: rows }, () =>
    new Array(cols).fill(false)
  );
  const directions = [
    [0, 1], // Right
    [1, 0], // Down
    [0, -1], // Left
    [-1, 0], // Up
  ];

  function dfs(r, c) {
    if (
      r < 0 ||
      r >= rows ||
      c < 0 ||
      c >= cols || // Out of bounds
      visited[r][c] ||
      matrix[r][c] !== 0 // Already visited or invalid cell
    ) {
      return;
    }

    visited[r][c] = true;
    console.log(`Visited: (${r}, ${c})`);

    for (const [dr, dc] of directions) {
      dfs(r + dr, c + dc);
    }
  }

  dfs(startRow, startCol);
}
