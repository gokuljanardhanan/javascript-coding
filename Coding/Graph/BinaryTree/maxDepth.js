var maxDepth = function (root) {
  console.log(root);
  if (!root) {
    return 0;
  }
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

console.log(maxDepth([3, 9, 20, null, null, 15, 7])); // 3
console.log(maxDepth([1, null, 2])); // 2
