/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let updatedStr = "";
  let reverseStr = "";
  s = s.toLowerCase();
  for (let i = 0; i < s.length; i++) {
    if (
      (s[i].charCodeAt() >= 97 && s[i].charCodeAt() <= 122) ||
      (s[i].charCodeAt() >= 48 && s[i].charCodeAt() <= 57)
    ) {
      updatedStr = updatedStr + s[i];
      reverseStr = s[i] + reverseStr;
    }
  }
  return updatedStr === reverseStr;
};

console.log(isPalindrome("A man, a plan, a canal: Panama")); //true
console.log(isPalindrome("race a car")); //false

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome1 = function (s) {
  // Convert to lowercase and filter out non-alphanumeric characters
  const cleanedStr = s.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Compare cleaned string with its reverse
  return cleanedStr === cleanedStr.split("").reverse().join("");
};

var isPalindrome2 = function (s) {
  s = s.toLowerCase(); // Convert to lowercase
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    // Move left pointer to the next alphanumeric character
    while (
      left < right &&
      !(
        (s[left] >= "a" && s[left] <= "z") ||
        (s[left] >= "0" && s[left] <= "9")
      )
    ) {
      left++;
    }
    // Move right pointer to the previous alphanumeric character
    while (
      left < right &&
      !(
        (s[right] >= "a" && s[right] <= "z") ||
        (s[right] >= "0" && s[right] <= "9")
      )
    ) {
      right--;
    }
    // Compare characters at left and right pointers
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
Given a string s, return true if it is a palindrome, or false otherwise. 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
*/
