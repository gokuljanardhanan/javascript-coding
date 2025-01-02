//Time Comple
var containsNearbyDuplicate = function (nums, k) {
  const hashMap = {}; // Store the last seen index of each number

  for (let i = 0; i < nums.length; i++) {
    // Check if the current number is in hashMap and its previous index difference is <= k
    if (hashMap.hasOwnProperty(nums[i]) && i - hashMap[nums[i]] <= k) {
      return true;
    }
    // Update the last seen index for the current number
    hashMap[nums[i]] = i;
  }
  return false; // No duplicates found within the given distance k
};

/*
Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.
*/
