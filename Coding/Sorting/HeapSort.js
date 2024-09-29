function heapSort(arr) {
  let n = arr.length;

  for (let i = Math.floor(n / 2 - 1); i >= 0; i--) {
    heapify(arr, n, i);
  }

  for (let i = n - 1; i >= 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, i, 0);
  }

  return arr;
}

function heapify(arr, n, i) {
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if (left < n && arr[left] > arr[largest]) largest = left;
  if (right < n && arr[right] > arr[largest]) largest = right;
  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, n, largest);
  }
}

/*
Description:

A comparison-based algorithm that uses a binary heap data structure to sort elements. It builds a max heap and repeatedly extracts the maximum element to place it in the correct position.
Time Complexity:

Average Case: O(n log n)
Best Case: O(n log n)
Worst Case: O(n log n)
Space Complexity:

O(1) (in-place sorting).
*/
