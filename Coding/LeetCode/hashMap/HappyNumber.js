//Time Complexity : O(log n)
//Space Complexity : O(log n)

var isHappy = function (n) {
  const sqrtSum = (num) => {
    let sum = 0;
    while (num > 0) {
      let digit = num % 10;
      sum += digit * digit;
      num = Math.floor(num / 10);
    }
    return sum;
  };

  let seen = new Set();

  while (n !== 1 && !seen.has(n)) {
    seen.add(n);
    n = sqrtSum(n);
  }

  return n === 1;
};

console.log(isHappy(19)); // Output: true (19 is a happy number)
console.log(isHappy(2)); // Output: false (2 is not a happy number)

/*
Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not.
*/
