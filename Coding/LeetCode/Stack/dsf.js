class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  /**
   * @param {number} val
   * @return {void}
   */
  push(val) {
    this.stack.push(val);
    if (this.minStack.length === 0 || val <= this.getMin()) {
      this.minStack.push(val);
    }
  }

  /**
   * @return {void}
   */
  pop() {
    if (this.stack.length === 0) return;
    const poppedValue = this.stack.pop();
    if (poppedValue === this.getMin()) {
      this.minStack.pop();
    }
  }

  /**
   * @return {number}
   */
  top() {
    if (this.stack.length === 0) return null;
    return this.stack[this.stack.length - 1];
  }

  /**
   * @return {number}
   */
  getMin() {
    if (this.minStack.length === 0) return null;
    return this.minStack[this.minStack.length - 1];
  }
}

/*
Min stack is used to find the minimum element in the stack in constant time.
The idea is to keep track of the minimum element at each level of the stack.
In stack we can only remove elements from the top, so we can keep track of the minimum element at each level of the stack.
When we push an element to the stack, we check if the element is less than or equal to the current minimum element.

First we push the first element in minStack.Then we push the second element in minStack if it is less than or equal to the first element.
So that from top even we remove item, we still have the minimum element in the stack.
*/

/*
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

MinStack() initializes the stack object.
void push(int val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.
You must implement a solution with O(1) time complexity for each function.

Example 1:
Input
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

Output
[null,null,null,null,-3,null,0,-2]

Explanation
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2
*/
