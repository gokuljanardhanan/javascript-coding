const traverse = (node) => {
  if (!node) {
    return;
  }
  traverse(node.left); // Visit left subtree (DFS step)
  console.log(node.val); // Process the current node (in-order step)
  traverse(node.right); // Visit right subtree (DFS step)
};
traverse(root); // Start from the root node

/*
In-Order means you first visit the left subtree, then the current node, and finally the right subtree.
*/
