// Time Complexity: O(n* 2^n)
// Space Complexity: O(n), where n is the length of the input array. not considering the space required to store the output.
const nonDistinctSubsets = (nums) => {
  let curSet = [],
    subSets = [];
  nums = nums.sort((a, b) => a - b); // sort the array
  helper(0, nums, curSet, subSets);
  return subSets;
};

const helper = (index, nums, curSet, subSets) => {
  if (index >= nums.length) {
    subSets.push([...curSet]);
    return; // return to the previous call
  }
  curSet.push(nums[index]);
  helper(index + 1, nums, curSet, subSets);
  curSet.pop();
  while (index + 1 < nums.length && nums[index] === nums[index + 1]) {
    index++;
  }
  helper(index + 1, nums, curSet, subSets);
};

// Test Cases
console.log(nonDistinctSubsets([1, 2, 2])); // [ [], [ 1 ], [ 1, 2 ], [ 1, 2, 2 ], [ 2 ], [ 2, 2 ] ]

/*
Write a function that takes an array , which is not necessarily distinct, and returns all possible subsets.
*/
