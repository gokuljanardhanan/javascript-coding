function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
}

/*
Description:

Divides the input list into a sorted and an unsorted region, repeatedly selects the smallest (or largest) element from the unsorted region, and moves it to the sorted region.
Time Complexity:

Average Case: O(n^2)
Best Case: O(n^2)
Worst Case: O(n^2)
Space Complexity:

O(1) (in-place sorting).
*/
