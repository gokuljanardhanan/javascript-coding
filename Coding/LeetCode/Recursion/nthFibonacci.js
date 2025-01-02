function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(5)); // Output: 5

/*
Write a code for finding nth element in Fibonacci series

0, 1, 1, 2, 3, 5, 8, 13

Base case -> fibonacci(1) -> 0
Examples : 
    fibonacci(0) -> 0
    fibonacci(1) ->   : 1
    fibonacci(2) ->   : 1
    fibonacci(3) ->   : 2
    fibonacci(4) ->   : 3
    fibonacci(5) ->   : 5
    fibonacci(6) ->   : 8
    fibonacci(7) ->   : 13
Pattern -> fibonacci(n - 1) + fibonacci(n - 2);

Code : 
    if n <= 1 
        return n
    else
        return fibonacci(n-1) + fibonacci(n-2)
*/

/*
1. Simplest Possible Input:
F(0) = 0, F(1) = 1
These are the base cases.
2.Play Around with Examples:
F(2) = F(1) + F(0) = 1 + 0 = 1
F(3) = F(2) + F(1) = 1 + 1 = 2
F(4) = F(3) + F(2) = 2 + 1 = 3
3.Relate Hard Cases to Simple Cases:
Each Fibonacci number depends on the sum of the two preceding numbers.
4.Generalize Pattern:
F(n) = F(n-1) + F(n-2) for n > 1.
5.Write Code:
function fibonacci(n) {
    if (n <= 1) return n; // Base case
    return fibonacci(n - 1) + fibonacci(n - 2); // Recursive relation
}
*/
