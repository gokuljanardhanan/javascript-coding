//Dynamic size sliding window
//Time complexity : O(n)
// Space complexity : O(1)
const longestSubArrayWithSameElement = (arr) => {
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < arr.length; right++) {
    if (arr[right] !== arr[left]) {
      left = right;
    }
    maxLength = Math.max(maxLength, right - left + 1);
  }
};

console.log(
  longestSubArrayWithSameElement([1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1])
); // Output: 5
console.log(longestSubArrayWithSameElement([1, 2, 3, 4, 5])); // Output: 1
/*
Find length of the longest subarray with same elements
*/
