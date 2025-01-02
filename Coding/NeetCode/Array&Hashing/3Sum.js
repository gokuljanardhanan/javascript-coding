//Time complexity: O(n^2)
//Space complexity: O(1)

//Topics: Array, Two Pointers
var threeSum = function (nums) {
  const result = [];
  nums = nums.sort((a, b) => a - b); // Sort the array to handle duplicates and enable two-pointer approach.

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicate elements for `i`.

    const target = 0 - nums[i];
    let start = i + 1;
    let end = nums.length - 1;

    while (start < end) {
      const sum = nums[start] + nums[end];

      if (sum < target) {
        start++;
      } else if (sum > target) {
        end--;
      } else {
        result.push([nums[i], nums[start], nums[end]]);
        start++;
        end--;

        // Skip duplicate elements for `start` and `end`.
        while (start < end && nums[start] === nums[start - 1]) start++;
        while (start < end && nums[end] === nums[end + 1]) end--;
      }
    }
  }

  return result;
};
/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
Notice that the solution set must not contain duplicate triplets.

Example 1:
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.

Example 2:
Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.

Example 3:
Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
*/
