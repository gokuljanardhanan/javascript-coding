const canReachLeaf = (root) => {
  if (!root || root.val === 0) return false;
  if (!root.left && !root.right) return true;
  return canReachLeaf(root.left) || canReachLeaf(root.right);
};

/*
Determine if a path exists from the root to a leaf node that doesn't contain any 0s.
*/
