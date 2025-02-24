//Time Complexity: O(n)
//Space Complexity: O(n)
var maxVowels = function (s, k) {
  let start = 0,
    end = 0,
    maxLen = 0,
    currLen = 0;
  let vowels = new Set(["a", "e", "i", "o", "u"]);
  while (end < s.length) {
    if (end - start + 1 > k) {
      if (vowels.has(s[start])) {
        currLen--;
      }
      start++;
    }
    if (vowels.has(s[end])) {
      currLen++;
    }
    maxLen = Math.max(maxLen, currLen);
    end++;
  }
  return maxLen;
};

var maxVowelsAlternative = function (s, k) {
  let start = 0,
    maxLen = 0,
    currLen = 0;
  let vowels = new Set(["a", "e", "i", "o", "u"]);

  for (let end = 0; end < s.length; end++) {
    if (vowels.has(s[end])) {
      currLen++;
    }
    if (end >= k) {
      if (vowels.has(s[start])) {
        currLen--;
      }
      start++;
    }
    maxLen = Math.max(maxLen, currLen);
  }

  return maxLen;
};

/*
Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.
Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'. 

Example 1:
Input: s = "abciiidef", k = 3
Output: 3
Explanation: The substring "iii" contains 3 vowel letters.

Example 2:
Input: s = "aeiou", k = 2
Output: 2
Explanation: Any substring of length 2 contains 2 vowels.

Example 3:
Input: s = "leetcode", k = 3
Output: 2
Explanation: "lee", "eet" and "ode" contain 2 vowels.
*/
