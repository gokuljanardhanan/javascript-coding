// Time complexity : O(n)
// Space complexity : O(1)
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    // Increment the last digit by 1
    digits[i]++;

    // If the digit becomes 10, set it to 0 and continue to the next digit
    if (digits[i] === 10) {
      digits[i] = 0;
    } else {
      // If no carry is needed, return the result immediately
      return digits;
    }
  }
  // If all digits were 9, we need an additional 1 at the beginning
  digits.unshift(1);
  return digits;
};

console.log(plusOne([1, 2, 3])); // Output: [1, 2, 4]

/*
You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
Increment the large integer by one and return the resulting array of digits.
*/
