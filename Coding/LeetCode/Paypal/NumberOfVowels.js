//Company : Paypal
//Topics : String, Array

//Time complexity : O(k), where k = right - left + 1
//Space complexity : O(1)
var vowelStrings = function (words, left, right) {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  let count = 0;
  const isVowelString = (str) => {
    return vowels.has(str[0]) && vowels.has(str[str.length - 1]);
  };
  for (let i = left; i <= right; i++) {
    if (isVowelString(words[i])) count++;
  }
  return count;
};

//Test cases
console.log(vowelStrings(["are", "amy", "u"], 0, 2)); //2
console.log(vowelStrings(["are", "amy", "u"], 0, 1)); //1

/*
You are given a 0-indexed array of string words and two integers left and right.
A string is called a vowel string if it starts with a vowel character and ends with a vowel character where vowel characters are 'a', 'e', 'i', 'o', and 'u'.
Return the number of vowel strings words[i] where i belongs to the inclusive range [left, right].

Example 1:
Input: words = ["are","amy","u"], left = 0, right = 2
Output: 2
Explanation: 
- "are" is a vowel string because it starts with 'a' and ends with 'e'.
- "amy" is not a vowel string because it does not end with a vowel.
- "u" is a vowel string because it starts with 'u' and ends with 'u'.
The number of vowel strings in the mentioned range is 2.
*/
