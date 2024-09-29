function duplicates(a, n) {
  let myMap = new Map();
  const out = new Set();

  for (let i = 0; i < n; i++) {
    if (myMap.has(a[i])) {
      myMap.set(a[i], myMap.get(a[i]) + 1);
      out.add(a[i]);
    } else {
      myMap.set(a[i], 1);
    }
  }

  const result = Array.from(out);
  return result.length === 0 ? [-1] : result.sort((a, b) => a - b);
}

// Example usage:
console.log(duplicates([0, 3, 1, 2], 4)); // Output: [-1]
console.log(duplicates([2, 3, 1, 2, 3], 5)); // Output: [2, 3]

/* 
check my code is correct or not
Given an array arr of size n which contains elements in range from 0 to n-1, you need to find all the elements occurring more than once in the given array. Return the answer in ascending order. If no such element is found, return list containing [-1]. 

Examples:

Input: n = 4, arr[] = [0,3,1,2]
Output: -1
Explanation: There is no repeating element in the array. Therefore output is -1.
Input: n = 5, arr[] = [2,3,1,2,3]
Output: 2 3 
Explanation: 2 and 3 occur more than once in the given array.
Expected Time Complexity: O(n).
Expected Auxiliary Space: O(n).

Constraints:

1 <= n <= 105
0 <= arr[i] <= 105, for each valid i
*/
