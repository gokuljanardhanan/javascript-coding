/*
Time Complexity: O(n), where n is the number of elements in the array.
Space Complexity: O(n), due to the space required to store the elements in the set.
*/
const hasDuplicate = (nums) => {
  const numSet = new Set();
  for (let num of nums) {
    if (numSet.has(num)) {
      return true;
    }
    numSet.add(num);
  }
  return false;
};

/*
Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.
*/
