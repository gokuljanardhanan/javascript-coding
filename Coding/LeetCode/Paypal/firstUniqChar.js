//Company : Paypal
//Topics : String, Hash Table

var firstUniqChar = function (s) {
  const hashMap = new Map();

  for (let i = 0; i < s.length; i++) {
    const val = hashMap.get(s[i]) || 0;
    hashMap.set(s[i], val + 1);
  }
  console.log(hashMap);
  for (let i = 0; i < s.length; i++) {
    if (hashMap.get(s[i]) === 1) return i;
  }
  return -1;
};

// Test

/*
Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

Example 1:
Input: s = "leetcode"
Output: 0
Explanation:
The character 'l' at index 0 is the first character that does not occur at any other index.

Example 2:
Input: s = "loveleetcode"
Output: 2
*/
