// Time
function sortArray(arr) {
  let low = 0; // Points to the end of the 0s section
  let mid = 0; // Traverses the array
  let high = arr.length - 1; // Points to the start of the 2s section

  while (mid <= high) {
    if (arr[mid] === 0) {
      // Swap arr[low] and arr[mid] and increment both pointers
      [arr[low], arr[mid]] = [arr[mid], arr[low]];
      low++;
      mid++;
    } else if (arr[mid] === 1) {
      // 1 is in the right position, just move the mid pointer
      mid++;
    } else {
      // Swap arr[mid] and arr[high] and decrement the high pointer
      [arr[mid], arr[high]] = [arr[high], arr[mid]];
      high--;
    }
  }
  return arr;
}

// Test the function
const arr = [0, 2, 1, 1, 2, 0, 2, 0, 2];
console.log(sortArray(arr)); // Output: [0, 0, 0, 1, 1, 2, 2, 2]

/*
Given an array arr[] consisting of only 0s, 1s, and 2s. The task is to sort the array, 
i.e., put all 0s first, then all 1s and all 2s in last
const arr = [0,2,1,1,2,0,2,0,2]; [0,0,0,1,1,2,2,2]
*/
