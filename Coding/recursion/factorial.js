const factorial = (n) => {
  //Factorial of 0 is 1
  if (n === 0) {
    return 1;
  }

  return n * factorial(n - 1);
};

console.log(factorial(5)); // 120
console.log(factorial(4)); // 24
console.log(factorial(3)); // 6
