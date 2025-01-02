//Company : Paypal
//Topics :  Array, Sorting, Greedy, Prefix Sum

// Time Complexity: O(nlogn)
// Space Complexity: O(n)

/*
Approach : We can solve this problem using a greedy approach.
Greedy approach definition: A greedy algorithm is an algorithmic paradigm that follows the problem-solving
heuristic of making the locally optimal choice at each stage with the intent of finding a global optimum.
Here greedy approach used in a way that we sort the frequencies and nums in descending order and 
then calculate the maximum sum.
To find the frequencies, we can use the prefix sum technique. We are marking the start index of the 
request with +1 and end index +1 with -1. Then we calculate the prefix sum to get the actual frequencies.
end is marked to -1 while calculating the prefix sum because we need to decrement the frequency at the end index.
*/

var maxSumRangeQuery = function (nums, requests) {
  const MOD = 1e9 + 7;
  const n = nums.length;
  const freq = new Array(n).fill(0);

  // Count the frequency of each index in the requests
  for (const [start, end] of requests) {
    freq[start]++;
    if (end + 1 < n) freq[end + 1]--;
  }

  // Calculate the prefix sum to get the actual frequencies
  for (let i = 1; i < n; i++) {
    freq[i] += freq[i - 1];
  }

  // Sort frequencies and nums in descending order
  freq.sort((a, b) => b - a);
  nums.sort((a, b) => b - a);

  // Calculate the maximum sum
  let maxSum = 0;
  for (let i = 0; i < n; i++) {
    maxSum = (maxSum + freq[i] * nums[i]) % MOD;
  }

  return maxSum;
};

/*
We have an array of integers, nums, and an array of requests where requests[i] = [starti, endi]. The ith request asks for the sum of nums[starti] + nums[starti + 1] + ... + nums[endi - 1] + nums[endi]. Both starti and endi are 0-indexed.
Return the maximum total sum of all requests among all permutations of nums.
Since the answer may be too large, return it modulo 109 + 7.
*/
