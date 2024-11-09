// Time Complexity : O(n)
// Space Complexity : O(m) : where m is the number of unique characters in pattern and words in s. This space is used to store the mappings in patterMap and wordMap.
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  let patterMap = {};
  let wordMap = {};
  let wordList = s.split(" ");

  if (pattern.length !== wordList.length) {
    console.log("1");
    return false;
  }

  for (let i = 0; i < pattern.length; i++) {
    let char = pattern[i];
    let word = wordList[i];

    // Check if character in pattern has been mapped
    if (
      patterMap.hasOwnProperty(char) &&
      patterMap[char] &&
      patterMap[char] !== word
    ) {
      console.log("2");
      return false;
    }

    // Check if word in wordList has been mapped
    if (
      wordMap.hasOwnProperty(word) &&
      wordMap[word] &&
      wordMap[word] !== char
    ) {
      return false;
    }

    // Set the mappings
    patterMap[char] = word;
    wordMap[word] = char;
  }

  return true;
};

console.log(wordPattern("abba", "dog cat cat fish")); // Output: false
console.log(wordPattern("abba", "dog cat cat dog")); // Output: true
console.log(wordPattern("aaaa", "dog cat cat dog")); // Output: false

/*
Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s. Specifically:

Each letter in pattern maps to exactly one unique word in s.
Each unique word in s maps to exactly one letter in pattern.
No two letters map to the same word, and no two words map to the same letter.

Example 1:
Input: pattern = "abba", s = "dog cat cat dog"

Output: true

Explanation:

The bijection can be established as:

'a' maps to "dog".
'b' maps to "cat".

Example 2:
Input: pattern = "abba", s = "dog cat cat fish"

Output: false

Example 3:
Input: pattern = "aaaa", s = "dog cat cat dog"

Output: false
*/
