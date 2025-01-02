// Time complexity : O(n)
// Space complexity : O(h) where h is the height of the tree,for a skewed tree, h=n.
var getMinimumDifference = function (root) {
  let min = Infinity;
  let prev = null;

  const inorderTraversal = (node) => {
    if (!node) return;
    inorderTraversal(node.left);
    if (prev !== null) {
      min = Math.min(min, Math.abs(node.val - prev));
    }
    prev = node.val;
    inorderTraversal(node.right);
  };

  inorderTraversal(root);
  return min;
};

const root = {
  val: 1,
  left: {
    val: 0,
    left: null,
    right: null,
  },
  right: {
    val: 48,
    left: {
      val: 12,
      left: null,
      right: null,
    },
    right: {
      val: 49,
      left: null,
      right: null,
    },
  },
};

console.log(getMinimumDifference(root)); // Output: 1

/*
Given the root of a Binary Search Tree (BST), return the minimum absolute difference 
between the values of any two different nodes in the tree.
*/
