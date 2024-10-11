// Time Complexity = O(n)
// Space Complexity = O(1)

const canPlaceFlowers = function (flowerbed, n) {
  if (n == 0) {
    return true;
  }
  for (let i = 0; i < flowerbed.length; i++) {
    // Check if current plot is empty
    if (flowerbed[i] === 0) {
      // Check previous and next plots
      const prev = i === 0 || flowerbed[i - 1] === 0;
      const next = i === flowerbed.length - 1 || flowerbed[i + 1] === 0;

      if (prev && next) {
        flowerbed[i] = 1; // Plant a flower
        n--; // Decrease the number of flowers to plant
      }
    }
    // If we have planted enough flowers, return true
    if (n === 0) {
      return true;
    }
  }
  // If we can't plant all flowers, return false
  return false;
};

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1)); // Output: true
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2)); // Output: false

/*
You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

Example 1:
Input: flowerbed = [1,0,0,0,1], n = 1
Output: true

Example 2:
Input: flowerbed = [1,0,0,0,1], n = 2
Output: false
 
Constraints:
1 <= flowerbed.length <= 2 * 104
flowerbed[i] is 0 or 1.
There are no two adjacent flowers in flowerbed.
0 <= n <= flowerbed.length
*/
