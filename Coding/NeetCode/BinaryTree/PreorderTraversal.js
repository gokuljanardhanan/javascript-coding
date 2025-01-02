/*
Explanation: In preorder traversal, the nodes are recursively visited in this order: node, left, right.
The order is node, left, right.
NLR: Node, Left, Right
*/

const preorderTraversal = (root) => {
  const output = [];
  const preorder = (node) => {
    if (!node) return;
    output.push(node.val);
    preorder(node.left);
    preorder(node.right);
  };
  preorder(root);
  return output;
};

const preorderTraversalIterative = (root) => {
  const output = [];
  const stack = [];
  let cur = root;
  while (cur || stack.length) {
    if (cur) {
      output.push(cur.val);
      if (cur.right) stack.push(cur.right);
      cur = cur.left;
    } else {
      cur = stack.pop();
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
console.log(preorderTraversal(head)); // [ 10, 5, 3, 7, 15, 20 ]

/*
Given the root of a binary tree, return the preorder traversal of its nodes' values.
Example 1:
Input: root = [1,null,2,3]
Output: [1,2,3]
*/
