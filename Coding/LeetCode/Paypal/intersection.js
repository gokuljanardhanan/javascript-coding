//Company : Paypal
//Topics : Array, Two Pointers, Sorting

// Time Complexity: O(nlogn)
// Space Complexity: O(n)
var intersection = function (nums1, nums2) {
  nums1 = nums1.sort((a, b) => a - b);
  nums2 = nums2.sort((a, b) => a - b);
  let pointer1 = 0;
  let pointer2 = 0;
  const output = [];

  while (pointer1 < nums1.length && pointer2 < nums2.length) {
    if (nums1[pointer1] < nums2[pointer2]) {
      pointer1++;
    } else if (nums1[pointer1] > nums2[pointer2]) {
      pointer2++;
    } else {
      if (output[output.length - 1] !== nums1[pointer1]) {
        output.push(nums1[pointer1]);
      }
      pointer1++;
      pointer2++;
    }
  }
  return output;
};

/*
Given two integer arrays nums1 and nums2, return an array of their 
intersection
. Each element in the result must be unique and you may return the result in any order.

Example 1:
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]

Example 2:
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.
*/
