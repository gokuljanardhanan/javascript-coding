var uniquePaths = function (m, n) {
  recursivePaths = (r, c, m, n) => {
    if (r > m - 1 || c > n - 1) return 0;
    if (r === m - 1 && c === n - 1) return 1;
    return recursivePaths(r, c + 1, m, n) + recursivePaths(r + 1, c, m, n);
  };
  return recursivePaths(0, 0, m, n);
};

var uniquePathsMemo = function (m, n) {
  recursivePaths = (r, c, m, n, cache) => {
    if (r > m - 1 || c > n - 1) return 0;
    if (cache[r][c] > 0) return cache[r][c];
    if (r === m - 1 && c === n - 1) return 1;
    cache[r][c] =
      recursivePaths(r, c + 1, m, n, cache) +
      recursivePaths(r + 1, c, m, n, cache);
    return cache[r][c];
  };
  let cache = Array.from({ length: m }, () => Array(n).fill(0));
  return recursivePaths(0, 0, m, n, cache);
};

var uniquePathsBottomUp = function (m, n) {
  let prevRow = new Array(n).fill(0);
  for (let r = m - 1; r >= 0; r--) {
    let curRow = new Array(n).fill(0);
    curRow[n - 1] = 1;
    for (let c = n - 2; c >= 0; c--) {
      curRow[c] = curRow[c + 1] + prevRow[c];
    }
    prevRow = curRow;
  }
  return prevRow[0];
};

/*
There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.
Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.
The test cases are generated so that the answer will be less than or equal to 2 * 109.
*/
