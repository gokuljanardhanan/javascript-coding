// Time complexity : O(n)
// Space complexity : O(1)

// Topics : Array, prefix product, suffix product
var productExceptSelf = function (nums) {
  const n = nums.length;
  const output = new Array(n).fill(1);
  console.log(output);

  // Calculate prefix products
  let prefix = 1;
  for (let i = 0; i < n; i++) {
    output[i] = prefix;
    prefix *= nums[i];
  }

  // Calculate suffix products and multiply with prefix products
  let suffix = 1;
  for (let i = n - 1; i >= 0; i--) {
    output[i] *= suffix;
    suffix *= nums[i];
  }

  return output;
};

/*
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
You must write an algorithm that runs in O(n) time and without using the division operation.

Example 1:
Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Example 2:
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
*/
