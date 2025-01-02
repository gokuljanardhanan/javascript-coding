//Company : Paypal
//Topics : Array, Binary Search
// Time Complexity: O(nlogn)
// Space Complexity: O(1)
const helperFn = (nums, div) => {
  let sum = 0;
  for (let num of nums) {
    sum += Math.ceil(num / div);
  }
  return sum;
};
var smallestDivisor = function (nums, threshold) {
  let start = 1;
  let end = Math.max(...nums); // The maximum possible divisor is the largest number in the array

  while (start < end) {
    const mid = Math.floor((start + end) / 2);
    const sum = helperFn(nums, mid);
    if (sum <= threshold) {
      end = mid; // Try to find a smaller divisor
    } else {
      start = mid + 1; // Increase the divisor
    }
  }
  return start;
};

/*
Approach: Binary Search
1. We will use binary search to find the smallest divisor.
2. The smallest divisor will be between 1 and the maximum number in the array.
3. We will calculate the sum of the array by dividing each element by the divisor.
4. If the sum is less than or equal to the threshold, we will try to find a smaller divisor by updating the end to mid.
5. If the sum is greater than the threshold, we will increase the divisor by updating the start to mid + 1.
6. We will continue this process until the start is less than the end
The condition start < end will ensure that we find the smallest divisor that satisfies the threshold.
We dont need start <= end because we are looking for the smallest divisor that satisfies the threshold, so we can stop when start is less than end.
*/

/*
Given an array of integers nums and an integer threshold, we will choose a positive integer divisor, divide all the array by it, and sum the division's result. Find the smallest divisor such that the result mentioned above is less than or equal to threshold.
Each result of the division is rounded to the nearest integer greater than or equal to that element. (For example: 7/3 = 3 and 10/2 = 5).
The test cases are generated so that there will be an answer.

Example 1:
Input: nums = [1,2,5,9], threshold = 6
Output: 5
Explanation: We can get a sum to 17 (1+2+5+9) if the divisor is 1. 
If the divisor is 4 we can get a sum of 7 (1+1+2+3) and if the divisor is 5 the sum will be 5 (1+1+1+2). 

Example 2:
Input: nums = [44,22,33,11,1], threshold = 5
Output: 44
*/
