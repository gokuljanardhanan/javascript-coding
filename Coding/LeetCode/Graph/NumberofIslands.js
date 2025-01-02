// COMPANY: PAYPAL
//TOPICS: Graph, Depth First Search
//Time complexity: O(m*n), where m is the number of rows and n is the number of columns in the grid
// Space complexity: O(m*n), where m is the number of rows and n is the number of columns in the grid
var numIslands = function (grid) {
  if (grid.length === 0 || grid[0].length === 0) return 0;

  const rows = grid.length;
  const cols = grid[0].length;
  let islandCount = 0;

  const dfs = (r, c) => {
    if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === "0") {
      return;
    }
    grid[r][c] = "0";
    dfs(r + 1, c);
    dfs(r - 1, c);
    dfs(r, c + 1);
    dfs(r, c - 1);
  };

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === "1") {
        islandCount++;
        dfs(r, c);
      }
    }
  }
  return islandCount;
};

// Test cases
const grid = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];
console.log(numIslands(grid)); // Output: 3

/*
Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.
An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
*/

/*
Approach :
Start at each 1 and use a recursive function to visit all connected 1s.
Each recursive call visits the neighboring cells (up, down, left, right).
Once finished, increment the island count.
*/
