// Time complexity : O(n2)
// Space complexity : O(1)
var longestPalindrome = function (s) {
  if (s.length <= 1) return s;

  let start = 0,
    maxLength = 0;

  function expandAroundCenter(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }

    const length = right - left - 1;
    if (length > maxLength) {
      maxLength = length;
      start = left + 1;
    }
  }

  for (let i = 0; i < s.length; i++) {
    expandAroundCenter(i, i);
    expandAroundCenter(i, i + 1);
  }

  return s.substring(start, start + maxLength);
};

console.log(longestPalindrome("babad")); //aba

/*
Given a string s, return the longest palindromic substring in s.

Example 1:
Input: s = "babad"
Output: "bab"

Explanation: "aba" is also a valid answer.

Example 2:
Input: s = "cbbd"
Output: "bb"
*/
