const fibBottomUp = (n) => {
  if (n <= 1) return n;
  let dp = [0, 1];
  let i = 2;
  while (i <= n) {
    const temp = dp[1];
    dp[1] = dp[0] + dp[1];
    dp[0] = temp;
    i++;
  }
  return dp[1];
};

const fibTopDown = (n, memo = {}) => {
  if (n <= 1) return n;
  if (memo[n]) return memo[n];
  memo[n] = fibTopDown(n - 1, memo) + fibTopDown(n - 2, memo);
  return memo[n];
};

var fib = function (n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
};

console.log(fib(4)); // 3
console.log(fib(10)); // 55

/*
Write a function that returns the nth number in the Fibonacci sequence.
*/
