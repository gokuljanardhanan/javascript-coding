function isPowerOfTwo(n) {
  if (n === 0) {
    return false;
  }
  return (n & (n - 1)) === 0;
}

// Test cases
console.log(isPowerOfTwo(8)); // Output: true
console.log(isPowerOfTwo(98)); // Output: false
console.log(isPowerOfTwo(1)); // Output: true

/*
Given a non-negative integer n. The task is to check if it is a power of 2. 

Examples

Input: n = 8
Output: true
Explanation: 8 is equal to 2 raised to 3 (23 = 8).
Input: n = 98
Output: false
Explanation: 98 cannot be obtained by any power of 2.
Input: n = 1
Output: true
Explanation: (20 = 1).
Expected Time Complexity: O(log n).
Expected Auxiliary Space: O(1).

Constraints:
0 ≤ n < 1020
*/
