// Time Complexity:
// Space Complexity:
function sumOfDigits(num) {
  if (num <= 9 && num >= 0) return num;
  return (num % 10) + sumOfDigits(Math.floor(num / 10));
}

function sumOfDigitsChatGpt(num) {
  if (num === 0) return 0;
  return (num % 10) + sumOfDigits(Math.floor(num / 10));
}

console.log(sumOfDigits(1234)); // Output: 10

console.log(sumOfDigits(123)); //6

/*
Explanation :
    123 -> 3 + sumOfDigits(12) : 3 + 2 = 5
    12 -> 2 + sumOfDigits(1) : 2 + 1 = 3
    sumOfDigits(1) -> 1
*/

/*
Base case : sumOfDigits (1) -> 1 (Sum of single digit return same number)
Examples : 
    sumOfDigits (1)       : 1 -> return 1
    sumOfDigits (12)      : 3  -> 2 + sumOfDigits(1)
    sumOfDigits (123)     : 6  -> 3 + sumOfDigits(12)
    sumOfDigits (1234)    : 10 -> 4 + sumOfDigits(123)
Pattern -> 
    (number % 10) + sumOfDigits(Math.floor(number/10))

Code :
    if number digits length is 1 -> return number
    else number % 10 + sumOfDigits(Math.floor(number/10))

*/
