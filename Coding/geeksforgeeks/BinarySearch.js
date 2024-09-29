const binarySearch = (item, arr) => {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === item) {
      return mid; // Item found, return the index
    } else if (arr[mid] > item) {
      high = mid - 1; // Search in the left half
    } else {
      low = mid + 1; // Search in the right half
    }
  }

  return -1; // Item not found, return -1
};

/*
Given a sorted array arr and an integer k, find the position(0-based indexing) at which k is present in the array using binary search.

Examples:

Input: k = 4, arr= [1, 2, 3, 4, 5]  
Output: 3
Explanation: 4 appears at index 3.
Input: k = 445, arr= [11, 22, 33, 44, 55] 
Output: -1
Explanation: 445 is not present.
Expected Time Complexity: O(logn)
Expected Space Complexity: O(logn) 

Note: Try to solve this problem in constant space i.e O(1)

Constraints:
1 <= arr.size() <= 105
1 <= arr[i] <= 106
1 <= k <= 106

*/
