// Time complexity : O(2^(m+n))
//space complexity : O(m+n)
var uniquePathsWithObstacles = function (obstacleGrid) {
  recursivePaths = (r, c, m, n) => {
    if (r > m - 1 || c > n - 1 || obstacleGrid[r][c] === 1) return 0;
    if (r === m - 1 && c === n - 1) return 1;
    return recursivePaths(r, c + 1, m, n) + recursivePaths(r + 1, c, m, n);
  };
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  return recursivePaths(0, 0, m, n);
};

//Time complexity : O(m*n)
//space complexity : O(m*n)
var uniquePathsWithObstaclesMemo = function (obstacleGrid) {
  recursivePaths = (r, c, m, n, cache) => {
    if (r > m - 1 || c > n - 1 || obstacleGrid[r][c] === 1) return 0;
    if (cache[r][c] > 0) return cache[r][c];
    if (r === m - 1 && c === n - 1) return 1;
    cache[r][c] =
      recursivePaths(r, c + 1, m, n, cache) +
      recursivePaths(r + 1, c, m, n, cache);
    return cache[r][c];
  };
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  let cache = Array.from({ length: m }, () => Array(n).fill(0));
  return recursivePaths(0, 0, m, n, cache);
};

//Time complexity : O(m*n)
//space complexity : O(n)
var uniquePathsWithObstaclesBottomUp = function (obstacleGrid) {
  const row = obstacleGrid.length;
  const col = obstacleGrid[0].length;
  let prevRow = new Array(col).fill(0);
  prevRow[col - 1] = obstacleGrid[row - 1][col - 1] === 1 ? 0 : 1;
  for (let r = row - 1; r >= 0; r--) {
    let curRow = new Array(col).fill(0);
    curRow[col - 1] = obstacleGrid[r][col - 1] === 1 ? 0 : prevRow[col - 1];
    for (let c = col - 2; c >= 0; c--) {
      if (obstacleGrid[r][c] === 1) {
        curRow[c] = 0;
      } else {
        curRow[c] = curRow[c + 1] + prevRow[c];
      }
    }
    prevRow = curRow;
  }
  return prevRow[0];
};

const obstacleGrid = [
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0],
];
console.log(uniquePathsWithObstacles(obstacleGrid)); // 2
console.log(uniquePathsWithObstaclesMemo(obstacleGrid)); // 2

/*
Write a function to return the number of unique paths to reach the bottom-right corner of the grid, 
given that some cells are blocked. A cell in the grid is initially marked as 1 if it is blocked, 
otherwise 0. The robot cannot move to a blocked cell.
*/
