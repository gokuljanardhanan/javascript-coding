function sum(n) {
  //Base case
  if (n === 0) return 0;
  // Pattern -> Number + Sum of all numbers from n-1 to 0
  return n + sum(n - 1);
}

console.log(sum(0)); //0
console.log(sum(1)); //1 -> 1 + sum(0) which is 0
console.log(sum(2)); //3 -> 2 + sum(1) which is 1
console.log(sum(3)); //6 -> 3 + sum(2) which is 3

/*
Write a recursive function that given an input n, sums all nonnegative integers upto n
*/
