// Time complexity : O(n)
// Space complexity : O(h1 + h2), where h1 and h2 are the heights of the trees.
var leafSimilar = function (root1, root2) {
  const collectLeafValues = (root, leafValues) => {
    if (!root) {
      return;
    }
    if (!root.left && !root.right) {
      leafValues.push(root.val);
    }
    collectLeafValues(root.left, leafValues);
    collectLeafValues(root.right, leafValues);
  };

  const leafValues1 = [];
  const leafValues2 = [];
  collectLeafValues(root1, leafValues1);
  collectLeafValues(root2, leafValues2);

  return JSON.stringify(leafValues1) === JSON.stringify(leafValues2);
};

/*
Consider all the leaves of a binary tree, from left to right order, the values of those leaves form a leaf value sequence.

For example, in the given tree above, the leaf value sequence is (6, 7, 4, 9, 8).
Two binary trees are considered leaf-similar if their leaf value sequence is the same.
Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.
*/
