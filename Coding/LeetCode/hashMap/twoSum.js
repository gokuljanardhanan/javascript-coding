//Time complexity: O(n)
//Space complexity: O(n)

var twoSum = function (nums, target) {
  const hashMap = {};
  for (let i = 0; i < nums.length; i++) {
    if (hashMap.hasOwnProperty(target - nums[i])) {
      return [hashMap[target - nums[i]], i];
    }
    hashMap[nums[i]] = i;
  }
};

//Time complexity : O(n)
//Space complexity : O(1)
// Topics : Array, Two Pointers
const twoSumEfficient = (numbers, target) => {
  let start = 0;
  let end = numbers.length - 1;
  while (start < end) {
    const sum = numbers[start] + numbers[end];
    if (sum < target) {
      start = start + 1;
    } else if (sum > target) {
      end = end - 1;
    } else {
      return [start + 1, end + 1];
    }
  }
  return null;
};

console.log(twoSum([3, 3], 6)); // Output: [0, 1]
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]

/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/
