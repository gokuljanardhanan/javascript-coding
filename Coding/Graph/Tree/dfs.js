class TreeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addNode(node) {
    this.children.push(node);
  }

  dfs(node, result = []) {
    result.push(node.value);
    for (let child of node.children) {
      this.dfs(child, result);
      //   result = this.dfs(child, result);
    }
    return result;
  }
}

const root = new TreeNode("A");
const nodeB = new TreeNode("B");
const nodeC = new TreeNode("C");
const nodeD = new TreeNode("D");
const nodeE = new TreeNode("E");

root.addNode(nodeB);
root.addNode(nodeC);
nodeB.addNode(nodeD);
nodeB.addNode(nodeE);

console.log(root.dfs(root)); // ["A", "B", "D", "E", "C"]
