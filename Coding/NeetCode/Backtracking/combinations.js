const helper = (index, n, curSet, combinations, k) => {
  if (curSet.length === k) {
    combinations.push([...curSet]);
    return;
  }
  if (index > n) {
    return;
  }
  curSet.push(index);
  helper(index + 1, n, curSet, combinations, k);
  curSet.pop();
  helper(index + 1, n, curSet, combinations, k);
};

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let combinations = [];
  helper(1, n, [], combinations, k);
  return combinations;
};

// Test cases
console.log(combine(4, 2)); // [ [ 1, 2 ], [ 1, 3 ], [ 1, 4 ], [ 2, 3 ], [ 2, 4 ], [ 3, 4 ] ]

/*
Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].
You may return the answer in any order.

Example 1:
Input: n = 4, k = 2
Output: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
Explanation: There are 4 choose 2 = 6 total combinations.
Note that combinations are unordered, i.e., [1,2] and [2,1] are considered to be the same combination.
*/
