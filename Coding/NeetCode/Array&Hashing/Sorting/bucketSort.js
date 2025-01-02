// Time complexity: O(n)  The counting is done in two loops, so the time complexity is O(n).
// Space complexity: O(1)  The space complexity is O(1) because we are using a fixed-size bucket array.
var sortColors = function (nums) {
  const bucket = [0, 0, 0];

  for (let i = 0; i < nums.length; i++) {
    bucket[nums[i]]++;
  }

  let index = 0;

  for (let j = 0; j < bucket.length; j++) {
    for (let k = 0; k < bucket[j]; k++) {
      nums[index] = j;
      index++;
    }
  }
  return nums;
};

/*
Explanation:
Bucket sort is a sorting algorithm that works by distributing the elements of an array into a number of buckets.
This is only applicable when the range of the input is known.
*/

/*
Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
You must solve this problem without using the library's sort function.

Example 1:
Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]

Example 2:
Input: nums = [2,0,1]
Output: [0,1,2]
*/
