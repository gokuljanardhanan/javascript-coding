// Time complexity : O(2^n)
// Space complexity : O(1)
var climbStairs = function (n) {
  if (n <= 1) return 1;
  return climbStairs(n - 1) + climbStairs(n - 2);
};

// Time complexity : O(n)
// Space complexity : O(n)
var climbStairs = function (n, memo = {}) {
  if (n <= 1) return 1;
  memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
  return memo[n];
};

// Time complexity : O(n)
// Space complexity : O(1)
function climbStairs(n) {
  if (n <= 1) return 1;

  let a = 1,
    b = 1; // Base cases: ways(0) = 1, ways(1) = 1
  for (let i = 2; i <= n; i++) {
    const temp = a + b; // Current ways = ways(i-1) + ways(i-2)
    a = b; // Shift a to b
    b = temp; // Update b to current
  }
  return b;
}

/*
You are climbing a staircase. It takes n steps to reach the top.
Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
*/

/*
HINT -> To reach nth step, what could have been your previous steps? (Think about the step sizes)
 
Base case -> climbStairs(n) : n = 0/1 -> 1
Examples : 
    climbStairs(0) -> 0     : 1
    climbStairs(1) -> 1     : 1
    climbStairs(2) -> 0 + 1 : 2
    climbStairs(3) -> 1+ 2  : 3
    climbStairs(4) -> 3 + 2 : 5
Pattern -> climbStairs(n-1) + climbStairs(n-2)

Code : 
    if n <= 1 -> return 1
    return climbStairs(n-1) + climbStairs(n-2)
*/
