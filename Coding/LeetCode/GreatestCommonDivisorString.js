/*
For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).
Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.
 
Example 1:
Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"


Example 2:
Input: str1 = "ABABAB", str2 = "ABAB"
Output: "AB"

Example 3:
Input: str1 = "LEET", str2 = "CODE"
Output: ""

Constraints:
1 <= str1.length, str2.length <= 1000
str1 and str2 consist of English uppercase letters.
*/

const gcdOfStrings = function (str1, str2) {
  // Check if the concatenated strings are equal, otherwise return an empty string
  if (str1 + str2 !== str2 + str1) {
    return "";
  }

  // Function to find GCD of two numbers (helper for the length of GCD string)
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

  // The GCD string will have the length equal to the GCD of the lengths of str1 and str2
  const gcdLength = gcd(str1.length, str2.length);

  // Return the common prefix of length gcdLength
  return str1.slice(0, gcdLength);
};
