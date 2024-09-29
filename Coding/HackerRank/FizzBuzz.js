/* Write a function FizzBuzz, given a number n, from 1 to n inclusive, for each number
print FizzBuzz if it is divisible by 3 and 5, print Fizz if it is divisible by 3, 
print Buzz if it is divisible by 5, otherwise print the number itself. 
*/

function fizzBuzz(n) {
  // Write your code here
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
