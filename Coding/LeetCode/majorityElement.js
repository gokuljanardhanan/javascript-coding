//Boyer-Moore Voting Algorithm
//Time Complexity: O(n)
//Space Complexity: O(1)
var majorityElement = function (nums) {
  let candidate = null;
  let count = 0;

  for (let num of nums) {
    if (count === 0) {
      candidate = num;
    }

    if (num === candidate) {
      count += 1;
    } else {
      count -= 1;
    }
  }

  return candidate;
};

console.log(majorityElement([3, 2, 3])); // 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // 2

//Time Complexity: O(n)
//Space Complexity: O(n)
var majorityElement = function (nums) {
  const obj = {};
  let max = 0;
  let item = nums[0];

  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) {
      obj[nums[i]] += 1;
    } else {
      obj[nums[i]] = 1;
    }

    if (obj[nums[i]] > max) {
      max = obj[nums[i]]; // Update max here
      item = nums[i];
    }
  }

  return item;
};

/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
 

Constraints:

n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109
*/
