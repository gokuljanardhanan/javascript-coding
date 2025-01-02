//Company : Paypal
//Topics : Array, Greedy

/*
Approach : We can solve this problem using a greedy approach.
Greedy approach definition: A greedy algorithm is an algorithmic paradigm that follows the problem-solving 
heuristic of making the locally optimal choice at each stage with the intent of finding a global optimum.
*/

// Time complexity : O(n)
// Space complexity : O(b), where b is the length of the banned array.
var maxCount = function (banned, n, maxSum) {
  const bannedSet = new Set(banned);
  let count = 0;
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    if (!bannedSet.has(i)) {
      sum += i;
      if (sum > maxSum) break;
      count++;
    }
  }
  return count;
};

// Test cases
console.log(maxCount([1, 6, 5], 5, 6)); //2
console.log(maxCount([1, 6, 5], 5, 5)); //1

/*
You are given an integer array banned and two integers n and maxSum. You are choosing some number of integers following the below rules:
The chosen integers have to be in the range [1, n].
Each integer can be chosen at most once.
The chosen integers should not be in the array banned.
The sum of the chosen integers should not exceed maxSum.
Return the maximum number of integers you can choose following the mentioned rules.

Example 1:
Input: banned = [1,6,5], n = 5, maxSum = 6
Output: 2
Explanation: You can choose the integers 2 and 4.
2 and 4 are from the range [1, 5], both did not appear in banned, and their sum is 6, which did not exceed maxSum.
*/
