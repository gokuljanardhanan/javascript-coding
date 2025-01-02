//Time complexity: O(log(m*n))
//Space complexity: O(1)
var searchMatrix = function (matrix, target) {
  let start = 0,
    end = matrix.length - 1;

  // Binary search to find the correct row
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    // Check if the target lies within the range of the current row
    if (
      matrix[mid][0] <= target &&
      matrix[mid][matrix[mid].length - 1] >= target
    ) {
      // Binary search within the row
      let low = 0,
        high = matrix[mid].length - 1;
      while (low <= high) {
        const middle = Math.floor((low + high) / 2);
        if (matrix[mid][middle] === target) {
          return true;
        } else if (matrix[mid][middle] > target) {
          high = middle - 1;
        } else {
          low = middle + 1;
        }
      }
      return false; // Target not found in this row
    } else if (matrix[mid][0] > target) {
      end = mid - 1; // Move to the upper half
    } else {
      start = mid + 1; // Move to the lower half
    }
  }

  return false; // Target not found
};

/*
You are given an m x n integer matrix matrix with the following two properties:
Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.
You must write a solution in O(log(m * n)) time complexity.
*/

var searchMatrixEfficient = function (matrix, target) {
  let rows = matrix.length;
  let cols = matrix[0].length;

  let start = 0;
  let end = rows * cols - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    // Calculate row and column indices for mid in the 2D matrix
    let row = Math.floor(mid / cols);
    let col = mid % cols;

    if (matrix[row][col] === target) {
      return true;
    } else if (matrix[row][col] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return false;
};
