// Time Complexity: O(n)
// Space Complexity: O(n)
const longestSubStr = (str) => {
  let start = 0; // Start of the sliding window
  let maxLength = 0; // Maximum length of substring found
  let charMap = new Map(); // To track characters and their indices

  for (let end = 0; end < str.length; end++) {
    const char = str[end];

    // If the character is already in the map and is within the current window
    if (charMap.has(char) && charMap.get(char) >= start) {
      start = charMap.get(char) + 1; // Move the start to exclude the repeated character
    }

    // Update the character's latest position
    charMap.set(char, end);

    if (end - start + 1 > maxLength) {
      console.log(start, end, str.slice(start, end + 1)); // For finding the substring
    }

    // Calculate the current window size
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
};

console.log(longestSubStr());

/*
You are given a string s. Find the length of the longest substring in s that contains no repeating characters.

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
*/
