//Company : Paypal
//Topics :

var countVowelSubstrings = function (word) {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  let count = 0;

  for (let i = 0; i < word.length; i++) {
    const vowelMap = new Map();
    for (let j = i; j < word.length; j++) {
      if (vowels.has(word[j])) {
        vowelMap.set(word[j], (vowelMap.get(word[j]) || 0) + 1);
        if (vowelMap.size === 5) {
          count++;
        }
      } else {
        break;
      }
    }
  }
  return count;
};

/*
A substring is a contiguous (non-empty) sequence of characters within a string.
A vowel substring is a substring that only consists of vowels ('a', 'e', 'i', 'o', and 'u') and has all five vowels present in it.
Given a string word, return the number of vowel substrings in word.

Example 1:
Input: word = "aeiouu"
Output: 2
Explanation: The vowel substrings of word are as follows (underlined):
- "aeiouu"
- "aeiouu"

Example 2:
Input: word = "unicornarihan"
Output: 0
Explanation: Not all 5 vowels are present, so there are no vowel substrings.
Example 3:

Input: word = "cuaieuouac"
Output: 7
Explanation: The vowel substrings of word are as follows (underlined):
- "cuaieuouac"
- "cuaieuouac"
- "cuaieuouac"
- "cuaieuouac"
- "cuaieuouac"
- "cuaieuouac"
- "cuaieuouac"
*/
