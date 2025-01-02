//Time Complexity = O(n)
//Space Complexity = O(1)

const summaryRanges = (nums) => {
  const result = [];
  let start = 0;

  for (let i = 1; i <= nums.length; i++) {
    // Check if current number is not consecutive
    if (i === nums.length || nums[i] !== nums[i - 1] + 1) {
      // If start is equal to i - 1, it's a single number range
      if (start === i - 1) {
        result.push(`${nums[start]}`);
      } else {
        result.push(`${nums[start]}->${nums[i - 1]}`);
      }
      // Update start to current index
      start = i;
    }
  }

  return result;
};

// Test cases
console.log(summaryRanges([0, 1, 2, 4, 5, 7])); // Output: ["0->2","4->5","7"]
console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9])); // Output: ["0","2->4","6","8->9"]

/*
You are given a sorted unique integer array nums.
A range [a,b] is the set of all integers from a to b (inclusive).
Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.
Each range [a,b] in the list should be output as:

"a->b" if a != b
"a" if a == b
*/
