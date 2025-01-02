// Time complexity :O(n + m), where n and m are the lengths of the two arrays
// Space Complexity: O(min(n, m))
//Topics: Array, Two Pointers
function findCommonElements(arr1, arr2) {
  let i = 0,
    j = 0; // Initialize pointers for both arrays
  const commonElements = [];

  // Traverse both arrays
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] === arr2[j]) {
      // If both elements are equal, add to the result
      commonElements.push(arr1[i]);
      i++; // Move pointer for arr1
      j++; // Move pointer for arr2
    } else if (arr1[i] < arr2[j]) {
      i++; // Move pointer for arr1 if element is smaller
    } else {
      j++; // Move pointer for arr2 if element is smaller
    }
  }

  return commonElements;
}

// Example usage:
const arr1 = [1, 2, 4, 5, 6];
const arr2 = [2, 3, 5, 7];
console.log(findCommonElements(arr1, arr2)); // Output: [2, 5]

/*
Write a function find common elements in 2 sorted arrays
*/

function commonElementsAlternative(arr1, arr2) {
  let pointer1 = 0;
  let pointer2 = 0;
  const output = [];

  while (pointer1 < arr1.length && pointer2 < arr2.length) {
    console.log(pointer1, pointer2);
    if (arr1[pointer1] === arr2[pointer2]) {
      output.push(arr1[pointer1]);
      pointer1++;
      pointer2++;
    } else if (arr1[pointer1] < arr2[pointer2]) {
      while (arr1[pointer1] < arr2[pointer2]) pointer1++;
    } else {
      pointer2++;
      while (arr1[pointer1] > arr2[pointer2]) pointer2++;
    }
  }
  return output;
}
