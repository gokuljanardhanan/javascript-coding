//Time complexity : O(n * k) where n is the number of strings and k is the average length of each string.
//Space complexity : O(n * k) where n is the number of strings and k is the average length of each string.
var groupAnagramsEfficient = function (strs) {
  let ans = {};

  for (let s of strs) {
    let count = new Array(26).fill(0);

    // Count frequency of each letter in the string
    for (let c of s) {
      count[c.charCodeAt(0) - "a".charCodeAt(0)]++;
    }

    let key = count.join("#"); // Use a string as a key
    if (!ans[key]) {
      ans[key] = [];
    }
    ans[key].push(s);
  }

  return Object.values(ans);
};

// Time complexity : O(n * k log k) where n is the number of strings and k is the average length of each string.
// Space complexity : O(n * k) where n is the number of strings and k is the average length of each string.
var groupAnagrams = function (strs) {
  const myMap = {};

  for (let str of strs) {
    const sortedStr = str.split("").sort().join("");
    if (!myMap[sortedStr]) {
      myMap[sortedStr] = [];
    }
    myMap[sortedStr].push(str);
  }

  return Object.values(myMap);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); //
console.log(groupAnagrams);

/*
Given an array of strings strs, group the 
anagrams
 together. You can return the answer in any order.

Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Explanation:

There is no string in strs that can be rearranged to form "bat".
The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.
*/
