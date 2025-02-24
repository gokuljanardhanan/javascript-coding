// Time complexity : O(n)
// Space complexity : O(h)
var goodNodes = function (root) {
  let count = 0;

  const dfs = (node, maxSoFar) => {
    if (!node) return;

    // If the current node value is greater than or equal to maxSoFar, it's a good node
    if (node.val >= maxSoFar) {
      count++;
      maxSoFar = node.val; // Update the maxSoFar to the current node value
    }

    // Recur for left and right children
    dfs(node.left, maxSoFar);
    dfs(node.right, maxSoFar);
  };

  // Start DFS from the root with the initial max value as the root's value
  dfs(root, root.val);

  return count;
};
/*
Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.

Return the number of good nodes in the binary tree.
*/
