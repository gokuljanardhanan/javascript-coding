// Time Complexity: O(m^2 + m * n)
// Space Complexity: O(m * n)
var equalPairs = function (grid) {
  const hashMap = {};
  let count = 0;
  for (let g of grid) {
    const val = g.join(".");
    hashMap[val] = hashMap[val] ? hashMap[val] + 1 : 1;
  }

  for (let col = 0; col < grid.length; col++) {
    let colArr = [];
    for (let row = 0; row < grid.length; row++) {
      colArr.push(grid[row][col]);
    }
    colArr = colArr.join(".");
    for (let key in hashMap) {
      if (key === colArr) {
        count = count + hashMap[key];
      }
    }
  }
  return count;
};

/*
Given a 0-indexed n x n integer matrix grid, return the number of pairs (ri, cj) such that row ri and column cj are equal.
A row and column pair is considered equal if they contain the same elements in the same order (i.e., an equal array).

Example 1:
Input: grid = [[3,2,1],[1,7,6],[2,7,7]]
Output: 1
Explanation: There is 1 equal row and column pair:
- (Row 2, Column 1): [2,7,7]

Example 2:
Input: grid = [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]
Output: 3
Explanation: There are 3 equal row and column pairs:
- (Row 0, Column 0): [3,1,2,2]
- (Row 2, Column 2): [2,4,2,2]
- (Row 3, Column 2): [2,4,2,2]
*/
