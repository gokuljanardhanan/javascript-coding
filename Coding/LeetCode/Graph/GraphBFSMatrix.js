function bfsGrid(matrix, startRow, startCol) {
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

  const queue = [[startRow, startCol]];
  visited[startRow][startCol] = true;

  while (queue.length > 0) {
    const [r, c] = queue.shift();
    console.log(`Visited: (${r}, ${c})`);

    for (const [dr, dc] of directions) {
      const nr = r + dr;
      const nc = c + dc;

      // Check bounds and if the cell is not visited
      if (
        nr >= 0 &&
        nr < rows &&
        nc >= 0 &&
        nc < cols &&
        !visited[nr][nc] &&
        matrix[nr][nc] === 0 // Assuming 0 is a valid cell
      ) {
        visited[nr][nc] = true;
        queue.push([nr, nc]);
      }
    }
  }
}
