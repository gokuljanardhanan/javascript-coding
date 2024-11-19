//Time complexity: O(2^n)
//Space complexity: O(n)
function fibonacciIterative(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacciIterative(n - 1) + fibonacciIterative(n - 2);
}

//Time complexity: O(n)
//Space complexity: O(1)
function fibonacciRecursive(n) {
  if (n <= 1) {
    return n;
  }
  let prev1 = 0,
    prev2 = 1,
    current;
  for (let i = 2; i <= n; i++) {
    current = prev1 + prev2;
    prev1 = prev2;
    prev2 = current;
  }
  return current;
}

console.log(fibonacciIterative(6)); // Output: 8
console.log(fibonacciRecursive(6)); // Output: 8
