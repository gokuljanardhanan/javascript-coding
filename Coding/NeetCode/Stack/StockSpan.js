//Time Complexity: O(n)
//Space Complexity: O(n)
function calculateSpan(prices) {
  let stack = [];
  let spans = new Array(prices.length);

  for (let i = 0; i < prices.length; i++) {
    // Pop elements from the stack while the current price is greater than the stack's top price
    while (stack.length > 0 && prices[stack[stack.length - 1]] <= prices[i]) {
      stack.pop();
    }

    // If the stack is empty, the span is the current index + 1
    if (stack.length === 0) {
      spans[i] = i + 1;
    } else {
      // Otherwise, the span is the difference between current index and the top of the stack
      spans[i] = i - stack[stack.length - 1];
    }

    // Push the current index onto the stack
    stack.push(i);
  }

  return spans;
}
