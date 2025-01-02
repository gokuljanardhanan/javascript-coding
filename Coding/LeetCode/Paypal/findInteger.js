//Company : Paypal
//Topics : Math, BFS
var findInteger = function (k, digit1, digit2) {
  const digits = [digit1, digit2].sort((a, b) => a - b);
  const [small, large] = digits;

  const queue = [];
  const visited = new Set();

  // Start BFS from the smallest digit that is not zero
  if (small !== 0) {
    queue.push(small);
    visited.add(small);
  }
  if (large !== 0 && large !== small) {
    queue.push(large);
    visited.add(large);
  }

  while (queue.length > 0) {
    const current = queue.shift();

    // If current is valid (multiple of k, larger than k)
    if (current > k && current % k === 0) {
      return current;
    }

    // Generate next numbers
    const next1 = current * 10 + small;
    const next2 = current * 10 + large;

    if (next1 <= 2 ** 31 - 1 && !visited.has(next1)) {
      queue.push(next1);
      visited.add(next1);
    }

    if (next2 <= 2 ** 31 - 1 && !visited.has(next2)) {
      queue.push(next2);
      visited.add(next2);
    }
  }

  return -1;
};

/*
Approach: Use BFS to generate all possible numbers that can be formed using the given digits.
Initialize a queue and a set to store visited numbers. And start BFS from the smallest digit that is not zero.
Generate the next numbers by appending the digits to the current number and push them to the queue.
Then check if the current number is a valid answer (multiple of k and larger than k).
Otherwise, continue the BFS process until the queue is empty or the answer is found.
*/

/*
Given three integers, k, digit1, and digit2, you want to find the smallest integer that is:
Larger than k,
A multiple of k, and
Comprised of only the digits digit1 and/or digit2.
Return the smallest such integer. If no such integer exists or the integer exceeds the limit of a signed 32-bit integer (231 - 1), return -1.

Example 1:
Input: k = 2, digit1 = 0, digit2 = 2
Output: 20
Explanation:
20 is the first integer larger than 2, a multiple of 2, and comprised of only the digits 0 and/or 2.

Example 2:
Input: k = 3, digit1 = 4, digit2 = 2
Output: 24
Explanation:
24 is the first integer larger than 3, a multiple of 3, and comprised of only the digits 4 and/or 2.

Example 3:
Input: k = 2, digit1 = 0, digit2 = 0
Output: -1
Explanation:
No integer meets the requirements so return -1.
*/
