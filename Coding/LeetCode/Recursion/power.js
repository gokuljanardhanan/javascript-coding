function power(base, exponent) {
  if (exponent === 0) return 1;
  if (exponent < 0) return 1 / power(base, -exponent);
  return base * power(base, exponent - 1);
}

console.log(power(2, 3));
Output: 8;

/*
 Base case : exponent = 0 > return 1;
 Examples : 
     power (2,0)       : 1
     power (2,1)       : 1 * power (2,0)    -> 1*1 = 1
     power (2,2)       : base * power (2,1) -> 2*1 = 2
     power (2,3)       : base * power (2,2) -> 2*2 = 4
 Pattern -> 
      base * power (base, exponent - 1)

 Code :
     if exponent = 0 -> return 1
     else base * power (base, exponent - 1)
*/

// Time Complexity : O(logn)
// Space Complexity : O(logn)
function myPow(x, n) {
  if (n === 0) return 1; // Base case: x^0 = 1

  if (n < 0) {
    // Handle negative powers: x^(-n) = 1 / x^n
    return 1 / myPow(x, -n);
  }

  // Recursive case
  const half = myPow(x, Math.floor(n / 2)); // Compute x^(n/2) once
  if (n % 2 === 0) {
    return half * half; // If n is even
  } else {
    return half * half * x; // If n is odd
  }
}
