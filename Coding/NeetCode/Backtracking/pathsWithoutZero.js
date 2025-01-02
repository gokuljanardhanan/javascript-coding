const pathWithoutZero = (root, path = []) => {
  if (!root || root.val === 0) return false;
  path.push(root.val);
  if (!root.left && !root.right) return path;
  if (pathWithoutZero(root.left, path)) return path;
  if (pathWithoutZero(root.right, path)) return path;
  path.pop();
  return false;
};

/*
Determine if a path exists from the root to a leaf node that doesn't contain any 0s.
*/
