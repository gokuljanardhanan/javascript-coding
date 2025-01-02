//Company : Paypal
//Topics : Array, Sorting

//Time complexity : O(nlogn)
//Space complexity : O(n)
var merge = function (intervals) {
  if (intervals.length === 0) return [];

  // Step 1: Sort the intervals based on the start time
  intervals.sort((a, b) => a[0] - b[0]);

  // Step 2: Initialize the result array
  let merged = [intervals[0]];

  // Step 3: Iterate through the sorted intervals
  for (let i = 1; i < intervals.length; i++) {
    let current = intervals[i];
    let lastMerged = merged[merged.length - 1];

    // If the current interval overlaps with the last merged interval
    if (current[0] <= lastMerged[1]) {
      // Merge by updating the end of the last merged interval
      lastMerged[1] = Math.max(lastMerged[1], current[1]);
    } else {
      // No overlap, just add the current interval
      merged.push(current);
    }
  }

  return merged;
};

/*
Approach: Sort the intervals based on the start time. 
Initialize the result array with the first interval. 
Iterate through the sorted intervals and merge the intervals if they overlap.
Check if the current interval overlaps with the last merged interval.
If they overlap, update the end of the last merged interval.
If they don't overlap, add the current interval to the result array.
*/

/*
Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

Example 1:
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

Example 2:
Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
*/
