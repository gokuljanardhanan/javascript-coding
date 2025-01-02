//Company : Paypal
//Topics : Array, Sorting, Two Pointers

// Time Complexity: O(nlogn)
// Space Complexity: O(n+m)
var minAvailableDuration = function (slots1, slots2, duration) {
  slots1 = slots1.sort((a, b) => a[0] - b[0]);
  slots2 = slots2.sort((a, b) => a[0] - b[0]);

  let point1 = 0;
  let point2 = 0;

  while (point1 < slots1.length && point2 < slots2.length) {
    const start = Math.max(slots1[point1][0], slots2[point2][0]);
    const end = Math.min(slots1[point1][1], slots2[point2][1]);
    if (end - start >= duration) return [start, start + duration];
    if (slots1[point1][1] < slots2[point2][1]) {
      point1++;
    } else {
      point2++;
    }
  }
  return [];
};

/*
Given the availability time slots arrays slots1 and slots2 of two people and a meeting duration duration, return the earliest time slot that works for both of them and is of duration duration.
If there is no common time slot that satisfies the requirements, return an empty array.
The format of a time slot is an array of two elements [start, end] representing an inclusive time range from start to end.
It is guaranteed that no two availability slots of the same person intersect with each other. That is, for any two time slots [start1, end1] and [start2, end2] of the same person, either start1 > end2 or start2 > end1.

Example 1:
Input: slots1 = [[10,50],[60,120],[140,210]], slots2 = [[0,15],[60,70]], duration = 8
Output: [60,68]

Example 2:
Input: slots1 = [[10,50],[60,120],[140,210]], slots2 = [[0,15],[60,70]], duration = 12
Output: []
*/
