//Company : Paypal
//Topics : String, Two Pointers

// Time complexity : O(n)
// Space complexity : O(n)

/*
Approach:
1. Convert the string to an array for easier manipulation.
2. Initialize start and end pointers.
3. Loop through the string from start to end.
4. If the characters at start and end are not the same, then check which character is smaller.
5. Replace the larger character with the smaller character.
6. Increment the start pointer and decrement the end pointer.
7. Return the array as a string.
*/
var makeSmallestPalindrome = function (s) {
  let start = 0;
  let end = s.length - 1;
  let arr = s.split(""); // Convert the string to an array for easier manipulation

  while (start < end) {
    if (arr[start] !== arr[end]) {
      if (arr[start] < arr[end]) {
        arr[end] = arr[start];
      } else {
        arr[start] = arr[end];
      }
    }
    start++;
    end--;
  }
  return arr.join("");
};

// Test cases
console.log(makeSmallestPalindrome("egcfe")); //efcfe
console.log(makeSmallestPalindrome("abacaba")); //abacaba

/*
You are given a string s consisting of lowercase English letters, and you are allowed to perform operations on it. In one operation, you can replace a character in s with another lowercase English letter.
Your task is to make s a palindrome with the minimum number of operations possible. If there are multiple palindromes that can be made using the minimum number of operations, make the lexicographically smallest one.
A string a is lexicographically smaller than a string b (of the same length) if in the first position where a and b differ, string a has a letter that appears earlier in the alphabet than the corresponding letter in b.
Return the resulting palindrome string.

Example 1:
Input: s = "egcfe"
Output: "efcfe"
Explanation: The minimum number of operations to make "egcfe" a palindrome is 1, and the lexicographically smallest palindrome string we can get by modifying one character is "efcfe", by changing 'g'.
*/
