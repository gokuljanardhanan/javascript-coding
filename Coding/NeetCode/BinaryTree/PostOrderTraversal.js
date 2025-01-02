/*
Explanation: In postorder traversal, the nodes are recursively visited in this order: left, right, node.
The order is left, right, node.
LRN: Left, Right, Node
*/

const postorderTraversal = (root) => {
  const output = [];
  const preorder = (node) => {
    if (!node) return;
    preorder(node.left);
    preorder(node.right);
    output.push(node.val);
  };
  preorder(root);
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
console.log(postorderTraversal(head)); // [ 3, 7, 5, 20, 15, 10 ]

/*
Given the root of a binary tree, return the preorder traversal of its nodes' values.
Example 1:
Input: root = [1,null,2,3]
Output: [3,2,1]
*/
