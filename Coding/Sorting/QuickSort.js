// Time complexity : O(nlogn)/O(n^2)worst case  The time complexity is O(nlogn) because the algorithm is a simple sorting algorithm.
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
Explanation:
Quick sort we will assume last element in the array is pivot, and based on pivot we will iterate from 0 to n-1,
Left pointer will keep at starting.
The elements less than pivot, will swap with left pointer. after each swap left pointer increments by 1.
Finally we will get elements less than pivot on the left side, and elements greater than pivot on the right side.
Now the pivot element will swap with last value of left pointer.
Now the left side of pivot will be values less than pivot and right side of pivot will be values greater than pivot.
Now we will recursively call quick sort on left side and right side of pivot.

STABLE  : No
*/

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
