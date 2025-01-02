//Dynamic size sliding window
// Time complexity : O(n + n) -> O(2n) -> O(n)
// Space complexity : O(1)
var minSubArrayLen = function (target, nums) {
  let start = 0;
  let minLen = Infinity;
  let sum = 0;

  for (let end = 0; end < nums.length; end++) {
    sum = sum + nums[end];
    while (sum >= target) {
      if (end - start + 1 < minLen) {
        minLen = end - start + 1;
      }
      sum = sum - nums[start];
      start++;
    }
  }
  return minLen === Infinity ? 0 : minLen;
};

/*
Given an array of positive integers nums and a positive integer target, return the minimal length of a 
subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

Example 1:
Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.

Example 2:
Input: target = 4, nums = [1,4,4]
Output: 1

Example 3:
Input: target = 11, nums = [1,1,1,1,1,1,1,1]
Output: 0
*/
