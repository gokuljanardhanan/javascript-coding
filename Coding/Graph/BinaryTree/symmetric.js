/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) return true;

  const isMirror = (p, q) => {
    if (!p && !q) return true; // Both nodes are null
    if (!p || !q) return false; // One is null and the other is not
    if (p.val !== q.val) return false; // Values don't match

    // Recursively check if the subtrees are mirror images
    return isMirror(p.left, q.right) && isMirror(p.right, q.left);
  };

  return isMirror(root.left, root.right);
};

// Example 1:
const root = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null,
    },
    right: {
      val: 4,
      left: null,
      right: null,
    },
  },
  right: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null,
    },
    right: {
      val: 3,
      left: null,
      right: null,
    },
  },
};

console.log(isSymmetric(root)); // Output: true

/*
Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
*/
