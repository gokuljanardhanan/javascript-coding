/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  // Base case: if root is null, there's no path
  if (!root) return false;

  // Subtract the current node's value from the targetSum
  targetSum -= root.val;

  // If it's a leaf node, check if the remaining targetSum is 0
  if (!root.left && !root.right) {
    return targetSum === 0;
  }

  // Recursively check left and right subtrees, if either returns true, the function stops
  return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum);
};

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  let out = false; // Track if a path with the target sum exists

  const dfs = (node, currentSum = 0) => {
    if (!node) return; // Base case: null node

    // Update the current sum by adding the current node's value
    currentSum += node.val;

    // If it's a leaf node, check if the current sum equals targetSum
    if (!node.left && !node.right) {
      if (currentSum === targetSum) {
        out = true;
      }
    } else {
      // Continue DFS on left and right subtrees
      dfs(node.left, currentSum);
      dfs(node.right, currentSum);
    }
  };

  // Start the DFS from the root
  dfs(root, 0);

  return out;
};

const root = {
  val: 4,
  left: {
    val: 2,
    left: {
      val: 1,
      left: null,
      right: null,
    },
    right: {
      val: 3,
      left: null,
      right: null,
    },
  },
  right: {
    val: 7,
    left: {
      val: 6,
      left: null,
      right: null,
    },
    right: {
      val: 9,
      left: null,
      right: null,
    },
  },
};

console.log(hasPathSum(root, 20)); // true

/*
Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.
A leaf is a node with no children.
*/
