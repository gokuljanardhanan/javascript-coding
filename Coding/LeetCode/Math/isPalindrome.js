// Time Complexity : O(log 10(x))
// Space Complexity : O(1)

var isPalindrome = function (x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }
  let reversedHalf = 0;
  while (x > reversedHalf) {
    reversedHalf = reversedHalf * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  // For even-length numbers, x and reversedHalf should be equal
  // For odd-length numbers, we divide reversedHalf by 10 to remove the middle digit
  return x === reversedHalf || x === Math.floor(reversedHalf / 10);
};

console.log(isPalindrome(121)); // Output: true
console.log(isPalindrome(-121)); // Output: false
console.log(isPalindrome(10)); // Output: false

// Time Complexity : O(n)
// Space Complexity : O(n)
var isPalindrome1 = function (x) {
  const y = x.toString().split("").reverse().join("");
  return x.toString() === y;
};

// Given an integer x, return true if x is a palindrome, and false otherwise.
