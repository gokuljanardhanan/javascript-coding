/**
 * @param {number[]} nums
 * @return {number}
 */
//Time Complexity: O(n)
//Space Complexity: O(1)
var findMinIndex = function (nums) {
  let low = 0;
  let high = nums.length - 1;

  while (low < high) {
    let mid = Math.floor((low + high) / 2);

    // If mid element is greater than the next element, next is the pivot
    if (mid < high && nums[mid] > nums[mid + 1]) {
      return mid + 1;
    }

    // Narrow down the search space
    if (nums[mid] < nums[high]) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }

  // At the end of the loop, low points to the pivot (minimum element)
  return low;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
//Time Complexity: O(log n)
//Space Complexity: O(1)
var searchRotatedArray = function (nums, target) {
  const pivot = findMinIndex(nums);
  const n = nums.length;

  // Binary search on the correct segment of the array
  let start, end;
  if (target >= nums[pivot] && target <= nums[n - 1]) {
    start = pivot;
    end = n - 1;
  } else {
    start = 0;
    end = pivot - 1;
  }

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return -1; // Element not found
};

/*
There is an integer array nums sorted in ascending order (with distinct values).
Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.
You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4

Example 2:
Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1

Example 3:
Input: nums = [1], target = 0
Output: -1

*/
