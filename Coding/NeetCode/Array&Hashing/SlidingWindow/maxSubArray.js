function maxSubArray(arr, k) {
  if (arr.length < k) {
    return null; // or throw an error, or return 0, depending on the requirement
  }

  let start = 0,
    end = 0,
    sum = 0,
    maxSum = -Infinity;

  while (end < arr.length) {
    sum += arr[end];

    if (end - start + 1 === k) {
      maxSum = Math.max(maxSum, sum);
      sum -= arr[start];
      start++;
    }

    end++;
  }

  return maxSum;
}
function maxSubArrayAlternative(arr, k) {
  if (arr.length < k) {
    return null; // or throw an error, or return 0, depending on the requirement
  }

  let start = 0,
    end = 0,
    sum = 0,
    maxSum = -Infinity;

  // Initialize the sum of the first window
  for (end = 0; end < k; end++) {
    sum += arr[end];
  }
  maxSum = sum;

  // Slide the window over the array
  while (end < arr.length) {
    sum += arr[end] - arr[start];
    maxSum = Math.max(maxSum, sum);
    start++;
    end++;
  }

  return maxSum;
}

// Example usage:
console.log(maxSubArray([1, 2, 3, 4, 5], 2)); // Output: 9 (4 + 5)
console.log(maxSubArray([1, 2, 3, 4, 5], 3)); // Output: 12 (3 + 4 + 5)
console.log(maxSubArray([1, 2, 3, 4, 5], 1)); // Output: 5 (5)
console.log(maxSubArray([1, 2, 3, 4, 5], 5)); // Output: 15 (1 + 2 + 3 + 4 + 5)
console.log(maxSubArray([1, 2, 3, 4, 5], 6)); // Output: null (or handle as needed)
