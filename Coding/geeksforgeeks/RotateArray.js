// function rotateArr(arr, d, n) {
//   const newArr = arr.splice(d);
//   arr = newArr.concat(arr);
//   return arr;
// }

// function rotateArr(arr, d, n) {
//   for (let i = 0; i < d; i++) {
//     arr.push(arr.shift());
//   }
//   return arr;
// }

function reverse(arr, start, end) {
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

function rotateArr(arr, d, n) {
  d = d % n;
  reverse(arr, 0, d - 1);
  reverse(arr, d, n - 1);
  reverse(arr, 0, n - 1);
  return arr;
}

console.log(rotateArr([1, 2, 3, 4, 5], 2, 5)); // [3, 4, 5, 1, 2]

/*
Given an unsorted array arr[] of size n. Rotate the array to the left (counter-clockwise direction) by d steps, where d is a positive integer. 

Note: Consider the array as circular.

Examples :

Input: n = 5, d = 2 arr[] = {1,2,3,4,5}
Output: 3 4 5 1 2
Explanation: 1 2 3 4 5  when rotated by 2 elements, it becomes 3 4 5 1 2.
Input: n = 10, d = 3 arr[] = {2,4,6,8,10,12,14,16,18,20}
Output: 8 10 12 14 16 18 20 2 4 6
Explanation: 2 4 6 8 10 12 14 16 18 20 when rotated by 3 elements, it becomes 8 10 12 14 16 18 20 2 4 6.
Your Task:
You need not print or read anything. You need to complete the function rotateArr() which takes the array, d, and n as input parameters and rotates the array by d elements. The array must be modified in-place without using extra space.

Expected Time Complexity: O(N)
Expected Auxiliary Space: O(1)
*/
