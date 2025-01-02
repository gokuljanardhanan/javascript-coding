//Time complexity : O(n)
//Space complexity : O(1)
// Topic: Sliding Window
function largestSubArraySumofK(arr, k) {
  let start = 0,
    end = 0,
    maxLength = 0,
    sum = 0;

  while (end < arr.length) {
    sum += arr[end];

    while (sum > k) {
      sum -= arr[start];
      start++;
    }

    if (sum === k) {
      maxLength = Math.max(maxLength, end - start + 1);
    }

    end++;
  }

  return maxLength;
}

// Example usage:
console.log(largestSubArraySumofK([1, 2, 3, 4, 5], 9)); // Output: 3 (subarray [2, 3, 4])
console.log(largestSubArraySumofK([1, 2, 3, 4, 5], 15)); // Output: 5 (subarray [1, 2, 3, 4, 5])
console.log(largestSubArraySumofK([1, 2, 3, 4, 5], 5)); // Output: 2 (subarray [2, 3])
console.log(largestSubArraySumofK([1, 2, 3, 4, 5], 6)); // Output: 2 (subarray [1, 5])
console.log(largestSubArraySumofK([1, 2, 3, 4, 5], 10)); // Output: 4 (subarray [1, 2, 3, 4])
