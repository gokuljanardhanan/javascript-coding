const checkParanthese = (inputVal) => {
  const stack = [];
  const bracketMap = {
    "}": "{",
    ")": "(",
    "]": "[",
  };

  for (let i = 0; i < inputVal.length; i++) {
    const char = inputVal[i];

    // If it's an opening bracket, push it to the stack
    if (["{", "(", "["].includes(char)) {
      stack.push(char);
    }
    // If it's a closing bracket, check for a match
    else if (["}", ")", "]"].includes(char)) {
      if (stack.length === 0 || stack.pop() !== bracketMap[char]) {
        return false; // Unbalanced
      }
    }
  }

  // If the stack is not empty, there are unmatched opening brackets
  return stack.length === 0;
};

// Test the function
const input = "{([])}"; // Example input
console.log("output", checkParanthese(input)); // Should print true

/*

Given an expression string x. Examine whether the pairs and the orders of {,},(,),[,] are correct in exp.
For example, the function should return 'true' for exp = [()]{}{[()()]()} and 'false' for exp = [(]).

Note: The drive code prints "balanced" if function return true, otherwise it prints "not balanced".

Example 1:

Input:
{([])}
Output: 
true
Explanation: 
{ ( [ ] ) }. Same colored brackets can form 
balanced pairs, with 0 number of 
unbalanced bracket.
Example 2:

Input: 
()
Output: 
true
Explanation: 
(). Same bracket can form balanced pairs, 
and here only 1 type of bracket is 
present and in balanced way.
Example 3:

Input: 
([]
Output: 
false
Explanation: 
([]. Here square bracket is balanced but 
the small bracket is not balanced and 
Hence , the output will be unbalanced.

*/
