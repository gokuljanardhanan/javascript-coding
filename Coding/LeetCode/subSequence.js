// Time complexity: O(n)
// Space complexity: O(1)

const isSubsequence = function (s, t) {
  let pos = 0;

  for (let i = 0; i < t.length; i++) {
    if (t[i] === s[pos]) {
      pos++;
    }

    // If we've already matched all characters in s, we can exit early
    if (pos === s.length) {
      return true;
    }
  }

  // If we exited the loop and haven't matched all of s, return false
  return pos === s.length;
};

var isSubsequenceTwoPointerSolution = function (s, t) {
  let i = 0; // Pointer for s
  let j = 0; // Pointer for t

  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      i++; // Move s pointer if characters match
    }
    j++; // Always move t pointer
  }
  // If i has reached the end of s, it means s is a subsequence of t
  return i === s.length;
};

/*
Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

Example 1:
Input: s = "abc", t = "ahbgdc"
Output: true

Example 2:
Input: s = "axc", t = "ahbgdc"
Output: false

Constraints:

0 <= s.length <= 100
0 <= t.length <= 104
s and t consist only of lowercase English letters.
*/
