/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (!p && !q) {
    return true;
  }

  if (!p || !q || p.val !== q.val) return false;

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

const p = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null,
    },
    right: {
      val: 5,
      left: null,
      right: null,
    },
  },
  right: {
    val: 3,
    left: {
      val: 6,
      left: null,
      right: null,
    },
    right: {
      val: 7,
      left: null,
      right: null,
    },
  },
};

const q = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null,
    },
    right: {
      val: 5,
      left: null,
      right: null,
    },
  },
  right: {
    val: 3,
    left: {
      val: 6,
      left: null,
      right: null,
    },
    right: {
      val: 7,
      left: null,
      right: null,
    },
  },
};

console.log(isSameTree(p, q)); // true

/*
Given the roots of two binary trees p and q, write a function to check if they are the same or not.
Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.
*/

var isSameTreeIterative = function (p, q) {
  // Initialize two queues for BFS traversal of both trees
  let queueP = [p],
    queueQ = [q];

  while (queueP.length > 0 && queueQ.length > 0) {
    let nodeP = queueP.shift();
    let nodeQ = queueQ.shift();

    // If both nodes are null, continue to the next pair of nodes
    if (!nodeP && !nodeQ) continue;

    // If one node is null or values are not equal, the trees are not the same
    if (!nodeP || !nodeQ || nodeP.val !== nodeQ.val) return false;

    // Add the left and right children of both nodes to their respective queues
    queueP.push(nodeP.left);
    queueP.push(nodeP.right);

    queueQ.push(nodeQ.left);
    queueQ.push(nodeQ.right);
  }

  // If both queues are empty at the end, the trees are the same
  return queueP.length === queueQ.length;
};
