//Time Complexity = O(n)
//Space Complexity = O(n)

var validParentheses = function (s) {
  const parenthesesMap = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  const stack = [];

  for (const item of s) {
    if (["(", "[", "{"].includes(item)) {
      stack.push(item);
    } else {
      if (parenthesesMap[item] !== stack.pop()) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

console.log(validParentheses("(]")); // Output: false
console.log(validParentheses("()")); // Output: true
console.log(validParentheses("()[]{}")); // Output: true

/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
*/
