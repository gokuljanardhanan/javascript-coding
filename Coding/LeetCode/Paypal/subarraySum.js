//Company : Paypal
//Topics : Array, Prefix Sum
var subarraySum = function (nums, k) {
  let count = 0;
  let cumFreq = new Map();
  let cumSum = 0;
  cumFreq.set(0, 1);

  for (let num of nums) {
    cumSum += num;
    if (cumFreq.has(cumSum - k)) {
      count += cumFreq.get(cumSum - k) || 0;
    }
    cumFreq.set(cumSum, (cumFreq.get(cumSum) || 0) + 1);
  }
  return count;
};

/*
Approach : Prefix Sum
Here prefix sum concept is used to solve this problem. We will keep track of the cumulative sum of the 
elements in the array. We will also keep track of the frequency of the cumulative sum. 
If the difference between the cumulative sum and k is found in the map, we will increment 
the count by the frequency of the difference. We will also update the frequency of the cumulative sum in the map.

At each index, we will calculate the cumulative sum and check if the difference between the cumulative sum and k
is present in the map. If it is present, we will increment the count by the frequency of the difference.
We are checking for cumSum - k, which means that the sum of the subarray from the previous index to the current index is k.
We will update the frequency of the cumulative sum in the map.
*/

/*
Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.
A subarray is a contiguous non-empty sequence of elements within an array. 

Example 1:
Input: nums = [1,1,1], k = 2
Output: 2

Example 2:
Input: nums = [1,2,3], k = 3
Output: 2
*/
