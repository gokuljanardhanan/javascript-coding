// Time complexity : O(n * m)
// Space complexity :  O(1)

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";
  const len = strs[0].length;
  let prefix = "";
  for (let i = 0; i < len; i++) {
    for (j = 0; j < strs.length; j++) {
      if (strs[j][i] !== strs[0][i]) {
        return prefix;
      }
    }
    prefix = prefix + strs[0][i];
  }
  return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"])); // "fl"
console.log(longestCommonPrefix(["dog", "racecar"])); // ""

var longestCommonPrefix1 = function (strs) {
  if (strs.length === 0) return ""; // Edge case: empty array
  let prefix = strs[0]; // Start with the first string as the prefix

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1); // Shorten prefix from the end
      if (prefix === "") return ""; // If prefix becomes empty, no common prefix
    }
  }

  return prefix;
};

/*
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".

Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
*/
