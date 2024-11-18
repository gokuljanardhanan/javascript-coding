class TreeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addNode(node) {
    this.children.push(node);
  }

  dfs(root, result = []) {
    result.push(root.value);
    for (const child of root.children) {
      this.dfs(child, result);
    }
    return result;
  }
}

const root = new TreeNode("CEO");
const cto = new TreeNode("CTO");
const cfo = new TreeNode("CFO");
const eng1 = new TreeNode("Eng1");
const eng2 = new TreeNode("Eng2");
const fin1 = new TreeNode("Fin1");

root.addNode(cto);
root.addNode(cfo);
cto.addNode(eng1);
cto.addNode(eng2);
cfo.addNode(fin1);

console.log(root.dfs(root)); // ["CEO", "CTO", "Eng1", "Eng2", "CFO", "Fin1"]
