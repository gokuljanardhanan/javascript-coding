// Time complexity :
// Space complexity :
function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(0)); //1
console.log(factorial(1)); //1
console.log(factorial(2)); //2
console.log(factorial(4)); //24

/*
Write a code for finding factorial using recursion

Base case -> factorial(0) -> 1
Examples : 
    factorial(1) -> 1 * factorial(0)  : 1
    factorial(2) -> 2 * factorial(1)  : 2
    factorial(3) -> 3 * factorial(2)  : 6
    factorial(4) -> 4 * factorial(3)  : 24
Pattern -> n * factorial(n-1)

Code : 
    if n== 0 
        return 1
    else
        return n * factorial(n-1)
*/
