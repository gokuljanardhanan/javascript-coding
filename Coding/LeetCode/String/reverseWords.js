//Time Complexity: O(n)
//Space Complexity: O(n)
var reverseWords = function (s) {
  s = s.trim().split(/\s+/); // Trim and split by one or more spaces
  let reversedWord = "";

  for (let i = s.length - 1; i >= 0; i--) {
    reversedWord += s[i] + " ";
  }

  return reversedWord.trim(); // Remove the trailing space
};

console.log(reverseWords("  hello world  ")); // Output: "world hello"
console.log(reverseWords("a good   example")); // Output: "example good a"
console.log(reverseWords("  Bob    Loves  Alice ")); // Output: "Alice Loves Bob"

var reverseWordsAlternative = function (s) {
  const words = s.trim().split(/\s+/); // Trim and split by one or more spaces
  return words.reverse().join(" "); // Reverse the array and join with a single space
};

/*
Given an input string s, reverse the order of the words.
A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.
Return a string of the words in reverse order concatenated by a single space.
Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

Example 1:
Input: s = "the sky is blue"
Output: "blue is sky the"
*/
