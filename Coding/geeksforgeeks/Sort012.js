//Dutch National Flag algorithm
function sort012(arr) {
  let low = 0;
  let mid = 0;
  let high = arr.length - 1;

  while (mid <= high) {
    if (arr[mid] === 0) {
      // Swap arr[low] and arr[mid]
      [arr[low], arr[mid]] = [arr[mid], arr[low]];
      low++;
      mid++;
    } else if (arr[mid] === 1) {
      mid++;
    } else {
      // Swap arr[mid] and arr[high]
      [arr[mid], arr[high]] = [arr[high], arr[mid]];
      high--;
    }
  }

  return arr;
}

console.log(sort012([0, 2, 1, 1, 2, 0, 0, 2, 0]));

// function sort012(arr) {
//     let max = arr.length;
//     let i = 0;
//     while(i<max){
//         if(arr[i]===0){
//             arr.splice(i,1);
//             arr.unshift(0);
//             i++;
//         }else if(arr[i]===2){
//             arr.splice(i,1);
//             arr.push(2);
//             max--;
//         }else{
//             i++;
//         }
//     }
//     return arr;
// }

// console.log(sort012([0, 2, 1,1,2,0,0, 2, 0]));

/*
Given an array arr containing only 0s, 1s, and 2s. Sort the array in ascending order.

Examples:

Input: arr[]= [0, 2, 1, 2, 0]
Output: 0 0 1 2 2
Explanation: 0s 1s and 2s are segregated into ascending order.
Input: arr[] = [0, 1, 0]
Output: 0 0 1
Explanation: 0s 1s and 2s are segregated into ascending order.
Expected Time Complexity: O(n)
Expected Auxiliary Space: O(1)

Constraints:
1 <= arr.size() <= 106
0 <= arr[i] <= 2
*/
