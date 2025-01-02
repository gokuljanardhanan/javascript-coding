// Time complexity : O(n)
// Space complexity : O(1)
// Topic: Sliding Window
function checkInclusion(s1, s2) {
  const s1Len = s1.length;
  const s2Len = s2.length;

  if (s1Len > s2Len) return false;

  const s1Count = new Array(26).fill(0);
  const s2Count = new Array(26).fill(0);

  // Count frequency of characters in s1
  for (let i = 0; i < s1Len; i++) {
    s1Count[s1.charCodeAt(i) - "a".charCodeAt(0)]++;
    s2Count[s2.charCodeAt(i) - "a".charCodeAt(0)]++;
  }

  // Compare initial window
  if (arraysEqual(s1Count, s2Count)) return true;

  // Sliding window
  for (let i = s1Len; i < s2Len; i++) {
    s2Count[s2.charCodeAt(i) - "a".charCodeAt(0)]++;
    s2Count[s2.charCodeAt(i - s1Len) - "a".charCodeAt(0)]--;

    if (arraysEqual(s1Count, s2Count)) return true;
  }

  return false;
}

function arraysEqual(arr1, arr2) {
  for (let i = 0; i < 26; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

// Example usage:
console.log(checkInclusion("abc", "lecabee")); // Output: true
console.log(checkInclusion("abc", "lecaabee")); // Output: false

/*
Approach:
First we will calculate the frequence of characters in s1 and s2.
Then we will compare the frequency of characters in s1 and s2.
If they are equal then we will return true. Otherwise we will use sliding window approach.
We will keep a window of length s1 and slide it through s2, and keep comparing the frequency of characters in s1 and s2
By adding the frequency of the new character and removing the frequency of the old character.
*/

/*
Given two strings s1 and s2, return true if s2 contains a 
permutation of s1, or false otherwise.
In other words, return true if one of s1's permutations is the substring of s2.

Example 1:
Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").

Example 2:
Input: s1 = "ab", s2 = "eidboaoo"
Output: false
 
Constraints:

1 <= s1.length, s2.length <= 104
s1 and s2 consist of lowercase English letters.
*/
