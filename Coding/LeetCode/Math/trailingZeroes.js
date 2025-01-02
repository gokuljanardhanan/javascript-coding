// Time complexity : O(log 5n): The number of divisions is proportional to the logarithm of n base  5.
// Space complexity : O(1)  No additional space is required.
var trailingZeroes = function (n) {
  let count = 0;
  while (n >= 5) {
    n = Math.floor(n / 5);
    count += n;
  }
  return count;
};

/*
Explanation:
The number of trailing zeroes in n! is the number of 10 factors in n!.
Since 10 = 2 * 5, the number of 5 factors is always less than or equal to the number of 2 factors.
Therefore, we only need to count the number of 5 factors in n!.
*/

/*
Given an integer n, return the number of trailing zeroes in n!.
Note that n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1.

Example 1:
Input: n = 3
Output: 0
Explanation: 3! = 6, no trailing zero.

Example 2:
Input: n = 5
Output: 1
Explanation: 5! = 120, one trailing zero.

Example 3:
Input: n = 0
Output: 0
*/
