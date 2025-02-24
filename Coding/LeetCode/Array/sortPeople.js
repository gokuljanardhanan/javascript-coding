// Time Complexity : O(nlogn)
// Space Complexity : O(n)
var sortPeople = function (names, heights) {
  for (let i = 0; i < names.length; i++) {
    names[i] = [names[i], heights[i]];
  }
  names = names.sort((a, b) => b[1] - a[1]);
  for (let i = 0; i < names.length; i++) {
    names[i] = names[i][0];
  }
  return names;
};

// Time Complexity : O(nlogn)
// Space Complexity : O(n)
var sortPeopleHashMap = function (names, heights) {
  let n = names.length;
  let mapping = {};

  for (let i = 0; i < n; ++i) {
    mapping[heights[i]] = names[i];
  }

  heights.sort((a, b) => b - a);

  for (let i = 0; i < n; ++i) {
    names[i] = mapping[heights[i]];
  }

  return names;
};

/*
You are given an array of strings names, and an array heights that consists of distinct positive integers. Both arrays are of length n.

For each index i, names[i] and heights[i] denote the name and height of the ith person.

Return names sorted in descending order by the people's heights.

 

Example 1:

Input: names = ["Mary","John","Emma"], heights = [180,165,170]
Output: ["Mary","Emma","John"]
Explanation: Mary is the tallest, followed by Emma and John.
Example 2:

Input: names = ["Alice","Bob","Bob"], heights = [155,185,150]
Output: ["Bob","Alice","Bob"]
Explanation: The first Bob is the tallest, followed by Alice and the second Bob.
*/
