var maxSubarraySumCircular = function (nums) {
  let maxCurrent = nums[0];
  let maxGlobal = nums[0];
  let minCurrent = nums[0];
  let minGlobal = nums[0];
  let sum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    sum += nums[i];
    maxCurrent = Math.max(maxCurrent + nums[i], nums[i]);
    minCurrent = Math.min(minCurrent + nums[i], nums[i]);
    if (maxCurrent > maxGlobal) {
      maxGlobal = maxCurrent;
    }
    if (minCurrent < minGlobal) {
      minGlobal = minCurrent;
    }
  }

  if (maxGlobal < 0) {
    return maxGlobal;
  }

  return Math.max(sum - minGlobal, maxGlobal);
};

console.log([1, -2, 3, -2]); //3
console.log([5, -3, 5]); //10
console.log([-3, -2, -3]); //-2

/*
Explanation: 
1. Use Kadane's Algorithm for the normal max subarray sum.
2. Compute the circular max sum as Total sum - Minimum subarray sum.
3. Return the maximum of the two results, ensuring edge cases (like all negative numbers) are handled correctly.

Subtracting the minimum subarray sum from the total sum.
Why? Wrapping around means excluding the smallest contiguous segment to maximize the rest of the array.
*/

/*
Given a circular integer array nums of length n, return the maximum possible sum of a non-empty subarray of nums.
A circular array means the end of the array connects to the beginning of the array. Formally, the next element of nums[i] is nums[(i + 1) % n] and the previous element of nums[i] is nums[(i - 1 + n) % n].
A subarray may only include each element of the fixed buffer nums at most once. Formally, for a subarray nums[i], nums[i + 1], ..., nums[j], there does not exist i <= k1, k2 <= j with k1 % n == k2 % n.
*/
