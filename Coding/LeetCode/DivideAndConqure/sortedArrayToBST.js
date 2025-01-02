class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  const buildTree = (left, right) => {
    if (left > right) return null;

    const mid = Math.floor((left + right) / 2);
    const root = new TreeNode(nums[mid]);

    root.left = buildTree(left, mid - 1);
    root.right = buildTree(mid + 1, right);
    return root;
  };

  return buildTree(0, nums.length - 1);
};

/*
Given an integer array nums where the elements are sorted in ascending order, convert it to a 
height-balanced
 binary search tree.
 */
