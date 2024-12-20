var countBits = function (n) {
  const ans = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    ans[i] = ans[i >> 1] + (i & 1);
  }
  return ans;
};

var countBits = function (n) {
  const getOnes = (str) => {
    const arr = str.split("");
    let oneCount = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "1") {
        oneCount++;
      }
    }
    return oneCount;
  };
  const ans = [];
  for (let i = 0; i <= n; i++) {
    const bin = (i >>> 0).toString(2);
    ans.push(getOnes(bin));
  }
  return ans;
};

/*
Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.

Example 1:

Input: n = 2
Output: [0,1,1]
Explanation:
0 --> 0
1 --> 1
2 --> 10
Example 2:

Input: n = 5
Output: [0,1,1,2,1,2]
Explanation:
0 --> 0
1 --> 1
2 --> 10
3 --> 11
4 --> 100
5 --> 101 

Constraints:
0 <= n <= 105
 
Follow up:
It is very easy to come up with a solution with a runtime of O(n log n). Can you do it in linear time O(n) and possibly in a single pass?
*/
