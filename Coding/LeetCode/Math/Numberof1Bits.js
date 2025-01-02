/**
 * @param {number} n
 * @return {number}
 */
// Time complexity : O(logn)
// Space complexity : O(1)
var hammingWeight = function (n) {
  let count = 0;
  while (n > 0) {
    if (n & 1) count++;
    n = n >> 1;
  }
  return count;
};

console.log(hammingWeight(11)); // Output: 3
console.log(hammingWeight(128)); // Output: 1
console.log(hammingWeight(4294967293)); // Output: 31

/*
Given a positive integer n, write a function that returns the number of 
set bits in its binary representation (also known as the Hamming weight).
*/
