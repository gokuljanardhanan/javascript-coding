// Time Complexity: O(n)
// Space Complexity: O(h) where h is the height of the tree
var isValidBST = function (root) {
  let prev = -Infinity; // Initialize with smallest value

  const inorder = (node) => {
    if (!node) return true; // Base case: null node is valid

    // Traverse left subtree
    if (!inorder(node.left)) return false;

    // Check current node
    if (node.val <= prev) return false;
    prev = node.val;

    // Traverse right subtree
    return inorder(node.right);
  };

  return inorder(root);
};

const root = {
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
    left: {
      val: 12,
      left: null,
      right: null,
    },
    right: {
      val: 18,
      left: null,
      right: null,
    },
  },
};

console.log(isValidBST(root)); // Output: true

/*
Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
*/
