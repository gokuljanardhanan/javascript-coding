// Time complexity : O(logn)
// Space complexity :  O(1)
var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let mid = null;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
};

console.log(searchInsert([1, 3, 5, 6], 5)); // Output: 2 (target found at index 2)
console.log(searchInsert([1, 3, 5, 6], 2)); // Output: 1 (insert before 3)
console.log(searchInsert([1, 3, 5, 6], 7)); // Output: 4 (insert at the end)
console.log(searchInsert([1, 3, 5, 6], 0)); // Output: 0 (insert at the beginning)

/*
Given a sorted array of distinct integers and a target value, return the index if the target is found.
 If not, return the index where it would be if it were inserted in order.
You must write an algorithm with O(log n) runtime complexity.
*/
