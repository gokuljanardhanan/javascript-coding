//Time complexity : O(n)
//space complexity : O(n)
var dailyTemperatures = function (temperatures) {
  const len = temperatures.length;
  const stack = [];
  const res = [];
  for (let i = len - 1; i >= 0; i--) {
    const item = temperatures[i];
    while (stack.length > 0 && stack[stack.length - 1][0] <= item) {
      stack.pop();
    }
    if (stack.length === 0) {
      res[i] = 0;
    } else {
      res[i] = stack[stack.length - 1][1] - i;
    }
    stack.push([item, i]);
  }
  return res;
};

/*
Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

Example 1:
Input: temperatures = [73,74,75,71,69,72,76,73]
Output: [1,1,4,2,1,1,0,0]

Example 2:
Input: temperatures = [30,40,50,60]
Output: [1,1,1,0]

Example 3:
Input: temperatures = [30,60,90]
Output: [1,1,0]
*/
