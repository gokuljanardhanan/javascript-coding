//Time complexity : O(n)
// Space complexity : O(n)
var topKFrequent = function (nums, k) {
  const frequencyMap = new Map();

  // Step 1: Count frequencies
  for (const num of nums) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  }

  // Step 2: Bucket sort based on frequencies
  const buckets = Array(nums.length + 1)
    .fill()
    .map(() => []);

  for (const [num, freq] of frequencyMap.entries()) {
    buckets[freq].push(num);
  }

  // Step 3: Collect top K frequent elements
  const result = [];
  for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
    if (buckets[i].length > 0) {
      result.push(...buckets[i]);
    }
  }

  return result.slice(0, k);
};

var topKFrequentHeap = function (nums, k) {
  const frequencyMap = new Map();

  // Step 1: Count frequencies
  for (const num of nums) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  }
  const minHeap = [];
  for (const [num, freq] of frequencyMap.entries()) {
    if (minHeap.length < k) {
      minHeap.push([num, freq]);
      minHeap.sort((a, b) => a[1] - b[1]);
    } else if (freq > minHeap[0][1]) {
      minHeap.shift();
      minHeap.push([num, freq]);
      minHeap.sort((a, b) => a[1] - b[1]);
    }
  }
  return minHeap.map((entry) => entry[0]);
};

// Example usage:
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)); // Output: [1, 2]
console.log(topKFrequent([1], 1)); // Output: [1]

/*
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

Example 1:
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Example 2:
Input: nums = [1], k = 1
Output: [1]
*/
