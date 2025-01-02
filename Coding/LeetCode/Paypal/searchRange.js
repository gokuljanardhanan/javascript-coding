//Company : Paypal
//Topics : Array, Binary Search
var searchRange = function (nums, target) {
  const result = [-1, -1];

  // Helper function to find the first occurrence of the target
  const findFirst = (nums, target) => {
    let start = 0;
    let end = nums.length - 1;
    while (start <= end) {
      const mid = Math.floor((start + end) / 2);
      if (nums[mid] === target) {
        if (mid === 0 || nums[mid - 1] !== target) {
          return mid;
        } else {
          end = mid - 1;
        }
      } else if (nums[mid] < target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    return -1;
  };

  // Helper function to find the last occurrence of the target
  const findLast = (nums, target) => {
    let start = 0;
    let end = nums.length - 1;
    while (start <= end) {
      const mid = Math.floor((start + end) / 2);
      if (nums[mid] === target) {
        if (mid === nums.length - 1 || nums[mid + 1] !== target) {
          return mid;
        } else {
          start = mid + 1;
        }
      } else if (nums[mid] < target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    return -1;
  };

  result[0] = findFirst(nums, target);
  if (result[0] !== -1) {
    result[1] = findLast(nums, target);
  }

  return result;
};

// Example usage:
console.log(searchRange([5, 7, 7, 8, 8, 10], 8)); // Output: [3, 4]
console.log(searchRange([5, 7, 7, 8, 8, 10], 6)); // Output: [-1, -1]
console.log(searchRange([], 0)); // Output: [-1, -1]

/*
Approach : Binary Search
In this case, we need to find the first and last occurrence of the target in the sorted array.
We can use two helper functions to find the first and last occurrences of the target.
The findFirst function will return the index of the first occurrence of the target 
only if it is the first element or the element before it is not the target, and continue the search by updating the end index to mid - 1.
The findLast function will return the index of the last occurrence of the target, 
only if it is the last element or the element after it is not the target and continue the search by updating the start index to mid + 1.
*/

/*
Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
If target is not found in the array, return [-1, -1].
You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]

Example 2:
Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]

Example 3:
Input: nums = [], target = 0
Output: [-1,-1]
*/
