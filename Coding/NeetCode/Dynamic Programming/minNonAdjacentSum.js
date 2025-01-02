const minNonAdjacentSum = (arr) => {
  const n = arr.length;
  if (n === 0) return 0;
  if (n === 1) return arr[0];

  // Initialize variables to store results of the last two states
  let prevPrev = 0; // dp[i-2]
  let prev = arr[0]; // dp[i-1]

  for (let i = 1; i < n; i++) {
    // Current minimum sum
    const current = Math.min(prev, arr[i] + (prevPrev || 0));
    // Update states
    prevPrev = prev;
    prev = current;
  }

  return prev;
};

// Example Usage:
console.log(minNonAdjacentSum([3, 2, 5, 10, 7])); // Output: 10
console.log(minNonAdjacentSum([1, 2, 3, 4, 5])); // Output: 5
console.log(minNonAdjacentSum([10, 2, 7, 1, 8])); // Output: 10
