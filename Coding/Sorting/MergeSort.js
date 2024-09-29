function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let result = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return result.concat(left, right);
}

/*
Description:

A divide-and-conquer algorithm that splits the array into halves, sorts each half, and then merges the sorted halves.
Time Complexity:

Average Case: O(n log n)
Best Case: O(n log n)
Worst Case: O(n log n)
Space Complexity:

O(n) (due to the auxiliary arrays used during merging).
*/
