//Company : Paypal
//Topics : String, Array

//Time complexity : O(n), where n is the length of the string s.
//Space complexity : O(n), where n is the length of the string s.
var reverseWords = function (s) {
  const words = s.split(" ");

  // Reverse each word and join them back with spaces
  const reversedWords = words.map((word) => word.split("").reverse().join(""));

  return reversedWords.join(" ");
};

function reverseWordsAlternative(s) {
  let result = "";
  let wordStart = 0;

  for (let i = 0; i <= s.length; i++) {
    // Check for word boundaries (space or end of string)
    if (i === s.length || s[i] === " ") {
      // Reverse the current word and append it to the result
      for (let j = i - 1; j >= wordStart; j--) {
        result += s[j];
      }
      // Add a space if it's not the last word
      if (i < s.length) result += " ";
      wordStart = i + 1; // Move to the next word
    }
  }

  return result;
}

// Example Usage
console.log(reverseWordsAlternative("Let's take LeetCode contest")); // Output: "s'teL ekat edoCteeL tsetnoc"
console.log(reverseWordsAlternative("Mr Ding")); // Output: "rM gniD"

/*
Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

Example 1:
Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"

Example 2:
Input: s = "Mr Ding"
Output: "rM gniD"
*/
