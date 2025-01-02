var inorderTraversalRecursive = function (root) {
  if (root === null) return;

  inorderTraversalRecursive(root.left); // Traverse the left subtree
  console.log(root.val); // Visit the root node
  inorderTraversalRecursive(root.right); // Traverse the right subtree
};

var inorderTraversalIterative = function (root) {
  const stack = [];
  let current = root;

  while (current !== null || stack.length > 0) {
    // Reach the leftmost node of the current subtree
    while (current !== null) {
      stack.push(current);
      current = current.left;
    }

    // Pop the node from the stack and visit it
    current = stack.pop();
    console.log(current.val); // Visit the root node

    // Now, visit the right subtree
    current = current.right;
  }
};
