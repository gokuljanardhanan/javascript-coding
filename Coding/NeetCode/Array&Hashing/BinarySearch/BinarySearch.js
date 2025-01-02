// Time Complexity: O(log n)
// Space Complexity: O(1)
var Binarysearch = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    console.log(left, right);
    const mid = Math.floor((left + right) / 2);
    const item = nums[mid];
    console.log("mid", mid, item);
    if (item === target) {
      return mid;
    } else if (target < item) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
};

console.log(Binarysearch([-1, 0, 3, 5, 9, 12], 9)); // 4
console.log(Binarysearch([-1, 0, 3, 5, 9, 12], 2)); // -1

/*
Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4

Example 2:
Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
*/
