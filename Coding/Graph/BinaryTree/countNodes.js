/*
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function (root) {
  if (!root) {
    return 0;
  }
  const queue = [root];
  let count = 0;

  while (queue.length > 0) {
    const item = queue.shift();
    count++;
    if (item.left) queue.push(item.left);
    if (item.right) queue.push(item.right);
  }
  return count;
};

/*
Given the root of a complete binary tree, return the number of the nodes in the tree.
According to Wikipedia, every level, except possibly the last, is completely filled in a complete binary tree, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.
Design an algorithm that runs in less than O(n) time complexity.
*/
