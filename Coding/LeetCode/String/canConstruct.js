// Time complexity : O(m+n)
//Space Complexity: O(k)

var canConstruct = function (ransomNote, magazine) {
  // Create a frequency map for the characters in the magazine
  const charCount = {};

  // Count each character in magazine
  for (let char of magazine) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Check if ransomNote can be constructed
  for (let char of ransomNote) {
    // If the character is missing or insufficient, return false
    if (!charCount[char] || charCount[char] === 0) {
      return false;
    }
    // Decrement the count of the character
    charCount[char]--;
  }

  return true;
};

var canConstruct1 = function (ransomNote, magazine) {
  let updatedMagazine = magazine;
  for (let i = 0; i < ransomNote.length; i++) {
    if (updatedMagazine.includes(ransomNote[i])) {
      const index = updatedMagazine.indexOf(ransomNote[i]);
      updatedMagazine =
        updatedMagazine.slice(0, index) + updatedMagazine.slice(index + 1);
      console.log(index, updatedMagazine);
    } else {
      return false;
    }
  }
  return true;
};

/*
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
Each letter in magazine can only be used once in ransomNote.

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false

Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false

Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true

*/
