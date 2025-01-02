//Company : Paypal
// Topics : Array, Binary Search, Dynamic Programming

//Time Complexity: O(nlogn)
//Space Complexity: O(n)
var lengthOfLIS = function (nums) {
  if (nums.length === 0) return 0;
  const dp = [];

  for (let num of nums) {
    let left = 0;
    let right = dp.length;
    while (left < right) {
      let mid = Math.floor((left + right) / 2);
      if (dp[mid] < num) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    if (left === dp.length) {
      dp.push(num);
    } else {
      dp[left] = num;
    }
  }
  return dp.length;
};

/*
Given an integer array nums, return the length of the longest strictly increasing 
subsequence

Example 1:
Input: nums = [10,9,2,5,3,7,101,18]
Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.

Example 2:
Input: nums = [0,1,0,3,2,3]
Output: 4

Example 3:
Input: nums = [7,7,7,7,7,7,7]
Output: 1
*/
