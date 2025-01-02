/*
Explanation: In order traversal is a depth-first search algorithm that starts traversing the tree 
from the root node and goes as far as possible along each branch before backtracking.
The order is left, node, right. 
LNR: Left, Node, Right
*/
// Time Complexity: O(n)
// Space Complexity: O(n)
var inorderTraversal = function (root) {
  const result = [];
  const inorder = (node) => {
    if (!node) return;
    inorder(node.left);
    result.push(node.val);
    inorder(node.right);
  };
  inorder(root);
  return result;
};

var inorderTraversalIterative = function (root) {
  const output = [];
  const stack = [];
  let cur = root;
  while (cur || stack.length) {
    if (cur !== null) {
      stack.push(cur);
      cur = cur.left;
    } else {
      cur = stack.pop();
      output.push(cur.val);
      cur = cur.right;
    }
  }
  return output;
};

// Test cases

const head = {
  val: 10,
  left: {
    val: 5,
    left: {
      val: 3,
      left: null,
      right: null,
    },
    right: {
      val: 7,
      left: null,
      right: null,
    },
  },
  right: {
    val: 15,
    left: null,
    right: {
      val: 20,
      left: null,
      right: null,
    },
  },
};
console.log(inorderTraversal(head)); // [ 3, 5, 7, 10, 15, 20 ]

/*
Given the root of a binary tree, return the inorder traversal of its nodes' values.
Example 1:
Input: root = [1,null,2,3]
Output: [1,3,2]
*/
