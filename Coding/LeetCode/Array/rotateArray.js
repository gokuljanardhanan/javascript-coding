//Time complexity : O(n)
//Space complexity : O(1)
var rotate = function (nums, k) {
  const n = nums.length;

  // Normalize k
  k = k % n;

  // Helper function to reverse a portion of the array
  function reverse(start, end) {
    while (start < end) {
      const temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;
      start++;
      end--;
    }
  }

  // Step 1: Reverse the entire array
  reverse(0, n - 1);

  // Step 2: Reverse the first k elements
  reverse(0, k - 1);

  // Step 3: Reverse the remaining n-k elements
  reverse(k, n - 1);

  return nums;
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3)); // Output: [5,6,7,1,2,3,4]
console.log(rotate([-1, -100, 3, 99], 2)); // Output: [3,99,-1,-100]
console.log(rotate([1, 2, 3, 4, 5, 6], 3)); // Output: [4,5,6,1,2,3]

/*
Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

Example 1:
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]

Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

Example 2:
Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]

Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
*/
