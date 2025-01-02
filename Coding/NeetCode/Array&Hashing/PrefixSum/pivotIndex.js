//Time Complexity: O(n)
//Space Complexity: O(n)
var pivotIndex = function (nums) {
  // Step 1: Compute the prefix sum array
  const prefixSum = [];
  prefixSum[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    prefixSum[i] = prefixSum[i - 1] + nums[i];
  }

  // Step 2: Traverse to find the pivot index
  const totalSum = prefixSum[prefixSum.length - 1]; // Total sum of the array
  for (let i = 0; i < nums.length; i++) {
    const leftSum = i > 0 ? prefixSum[i - 1] : 0;
    const rightSum = totalSum - prefixSum[i];
    if (leftSum === rightSum) {
      return i;
    }
  }

  return -1; // Return -1 if no pivot index is found
};
