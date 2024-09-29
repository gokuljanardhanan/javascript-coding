function findEquilibriumPoint(arr) {
  const totalSum = arr.reduce((acc, num) => acc + num, 0);
  let leftSum = 0;

  for (let i = 0; i < arr.length; i++) {
    // Calculate right sum for the current index
    const rightSum = totalSum - leftSum - arr[i];

    // Check if left sum equals right sum
    if (leftSum === rightSum) {
      return i + 1; // Return 1-based index
    }

    // Update left sum for next iteration
    leftSum += arr[i];
  }

  return -1; // No equilibrium point found
}

// Test cases
console.log(findEquilibriumPoint([1, 3, 5, 2, 2])); // Output: 3
console.log(findEquilibriumPoint([1])); // Output: 1
console.log(findEquilibriumPoint([1, 2, 3])); // Output: -1

/*
Given an array arr of non-negative numbers. The task is to find the first equilibrium point in an array. The equilibrium point in an array is an index (or position) such that the sum of all elements before that index is the same as the sum of elements after it.

Note: Return equilibrium point in 1-based indexing. Return -1 if no such point exists. 

Examples:

Input: arr[] = [1, 3, 5, 2, 2]
Output: 3 
Explanation: The equilibrium point is at position 3 as the sum of elements before it (1+3) = sum of elements after it (2+2). 
Input: arr[] = [1]
Output: 1
Explanation: Since there's only one element hence it's only the equilibrium point.
Input: n = 3, arr[] = [1, 2, 3]
Output: -1
Explanation: There is no equilibrium point in the given array.
Expected Time Complexity: O(n)
Expected Auxiliary Space: O(1)

Constraints:
1 <= arr.size <= 105
0 <= arr[i] <= 109
*/
