# Algorithm - Backtracking

[[leetcode51N皇后]]

- 与[[深度优先搜索]]联系紧密

## Summerize

- 返回条件
- 比如二叉树的遍历

```c++
void dfs(TreeNode* root) {
  if (root = nullptr) return;  // 返回条件, 深度的体现
  dfs(root->left);  // 优先每棵树的左节点
  dfs(root->right);
}
```
