function quickSort(arr) {
  if (arr.length <= 1) return arr;

  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

/*
Description:

A divide-and-conquer algorithm that selects a "pivot" element, partitions the array around the pivot, and recursively sorts the subarrays.
Time Complexity:

Average Case: O(n log n)
Best Case: O(n log n) (balanced partitions)
Worst Case: O(n^2) (highly unbalanced partitions)
Space Complexity:

O(log n) for the recursive call stack.
*/
