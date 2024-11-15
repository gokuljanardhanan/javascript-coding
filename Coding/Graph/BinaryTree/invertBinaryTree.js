/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (!root) return null; // Base case for empty tree

  const queue = [root];

  while (queue.length > 0) {
    const item = queue.shift();

    // Swap the left and right children regardless of their presence
    let temp = item.left;
    item.left = item.right;
    item.right = temp;

    // Add the children to the queue for further processing
    if (item.left) queue.push(item.left);
    if (item.right) queue.push(item.right);
  }

  return root;
};

/*
Given the root of a binary tree, invert the tree, and return its root.
*/
