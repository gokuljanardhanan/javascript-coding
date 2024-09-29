/*Simple js solution, but with Time complexity: O(n), Auxiliary Space O(1)*/

// function isPalindrome(s) {
//   return s.split("").reverse().join("") === s ? 1 : 0;
// }

function isPalindrome(s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) {
      return 0;
    }
    left++;
    right--;
  }
  return 1;
}

console.log(isPalindrome("abba"));

/*
Given a string S, check if it is palindrome or not.

Example 1:

Input: S = "abba"
Output: 1
Explanation: S is a palindrome
Example 2:

Input: S = "abc" 
Output: 0
Explanation: S is not a palindrome
*/
