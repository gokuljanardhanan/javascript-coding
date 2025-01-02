// Time Complexity : O(logx)
// Space Complexity : O(1)
var mySqrt = function (x) {
  if (x < 2) return x; // Handle 0 and 1 directly, as their square roots are themselves.

  let left = 2;
  let right = Math.floor(x / 2);

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let square = mid * mid;

    if (square === x) {
      return mid; // Exact square root found.
    } else if (square < x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return right;
};

console.log(mySqrt(4)); // Output: 2
console.log(sqr(8)); // Output: 2

/*
Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.
You must not use any built-in exponent function or operator.
For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
*/
