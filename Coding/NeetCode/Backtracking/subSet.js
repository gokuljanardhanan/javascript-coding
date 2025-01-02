// Time Complexity: O(n*2^n)
// Space Complexity: O(n), where n is the length of the input array. not considering the space required to store the output.
const subSet = (nums) => {
  let subSets = [],
    curSet = [];
  helper(0, nums, curSet, subSets);
  return subSets;
};

const helper = (index, nums, curSet, subSets) => {
  if (index === nums.length) {
    subSets.push([...curSet]);
    return;
  }

  curSet.push(nums[index]);
  helper(index + 1, nums, curSet, subSets);
  curSet.pop();
  helper(index + 1, nums, curSet, subSets);
};

console.log(subSet([1, 2, 3])); // [ [], [ 1 ], [ 1, 2 ], [ 1, 2, 3 ], [ 1, 3 ], [ 2 ], [ 2, 3 ], [ 3 ] ]

/*
Description:
Write a function that takes an array of distinct integers and returns all possible subsets.
*/
