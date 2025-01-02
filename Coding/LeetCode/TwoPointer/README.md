Two-Pointer Technique:
This approach uses two indices (pointers) to traverse an array (or string) in specific directions to solve problems.

When to Use:
Sorted Input: Problems that involve finding pairs, triplets, or subarrays in a sorted array.
Searching for Target Sum: Problems like finding pairs with a specific sum or two-sum variations.
Avoiding Nested Loops: When you can reduce O(n^2) solutions to O(n) by using two pointers.
Array/Substring Comparisons: Checking substrings, palindromes, or intersections.

Examples:

1. Finding a Pair with a Target Sum (Sorted Array):
2. Move one pointer from the start (low) and one from the end (high) based on the current sum relative to the target.
3. Checking for Palindrome:
4. Compare characters from the beginning and end simultaneously using two pointers.
5. Merging Two Sorted Arrays:
6. Traverse both arrays with two pointers to merge efficiently.

Example Problem:
Find a pair of numbers in a sorted array that adds up to a target.

function twoSumSorted(arr, target) {
let left = 0, right = arr.length - 1;
while (left < right) {
const sum = arr[left] + arr[right];
if (sum === target) return [arr[left], arr[right]];
else if (sum < target) left++;
else right--;
}
return null;
}

Complexity:
Time Complexity: O(n)
Space Complexity: O(1)
