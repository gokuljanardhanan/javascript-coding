// Time complexity: O(n)
// Space complexity: O(n)
var numIdenticalPairs = function (nums) {
  const hashMap = new Map();
  let totalCount = 0;
  for (let num of nums) {
    const count = hashMap.get(num) || 0;
    hashMap.set(num, count + 1);
  }
  for (let [, count] of hashMap.entries()) {
    if (count > 1) {
      totalCount = totalCount + (count * (count - 1)) / 2;
    }
  }
  return totalCount;
};

/*
Given an array of integers nums, return the number of good pairs.

A pair (i, j) is called good if nums[i] == nums[j] and i < j.

 

Example 1:

Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
Example 2:

Input: nums = [1,1,1,1]
Output: 6
Explanation: Each pair in the array are good.
Example 3:

Input: nums = [1,2,3]
Output: 0
*/
