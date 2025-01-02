/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  const stack = []; // Stack to store characters and numbers
  let currentString = ""; // String being processed
  let currentNum = 0; // Current number being processed

  for (const char of s) {
    if (!isNaN(char)) {
      // If the character is a number, calculate the full number
      currentNum = currentNum * 10 + parseInt(char);
    } else if (char === "[") {
      // Push the current string and number onto the stack
      stack.push(currentString);
      stack.push(currentNum);
      // Reset the current string and number
      currentString = "";
      currentNum = 0;
    } else if (char === "]") {
      // Pop the number and previous string from the stack
      const num = stack.pop();
      const prevString = stack.pop();
      // Repeat the current string `num` times and append to previous string
      currentString = prevString + currentString.repeat(num);
    } else {
      // If the character is a letter, add it to the current string
      currentString += char;
    }
  }

  return currentString;
};

/*
Given an encoded string, return its decoded string.
The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.
You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].
The test cases are generated so that the length of the output will never exceed 105.

Example 1:
Input: s = "3[a]2[bc]"
Output: "aaabcbc"

Example 2:
Input: s = "3[a2[c]]"
Output: "accaccacc"

Example 3:
Input: s = "2[abc]3[cd]ef"
Output: "abcabccdcdcdef"
 
*/
