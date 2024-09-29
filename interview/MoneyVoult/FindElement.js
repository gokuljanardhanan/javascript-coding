function findPivot(arr) {
  let low = 0;
  let high = arr.length - 1;

  while (low < high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] > arr[mid + 1]) {
      return mid + 1;
    } else if (arr[mid] < arr[high]) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }

  return 0; // Pivot is at the beginning if the array is not rotated
}

function binarySearch(arr, target, low, high) {
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1; // Target not found
}

function findPosition(arr, target) {
  const pivot = findPivot(arr);

  if (pivot === 0 || (target >= arr[0] && target <= arr[pivot - 1])) {
    return binarySearch(arr, target, 0, pivot - 1);
  } else {
    return binarySearch(arr, target, pivot, arr.length - 1);
  }
}

// Example usage:
const array1 = [5, 6, 7, 8, 9, 10, 1, 2, 3, 4];
const target1 = 8;
console.log(findPosition(array1, target1)); // Output: 3

const array2 = [5, 6, 7, 8, 9, 10, 1, 3, 4];
const target2 = 8;
console.log(findPosition(array2, target2)); // Output: 3

const array3 = [5, 6, 7, 8, 9, 10, 1, 3, 4];
const target3 = 11;
console.log(findPosition(array3, target3)); // Output: -1
