# code

#深度优先搜索

```c++
class Solution {
 public:
  int diamerterOfBinaryTree(TreeNode* root) {
    ans = INT_MIN;
    dfs(root);
    return ans - 1;
  }
  
  int ans;
  
  int dfs(TreeNode* root) {
    if (root == nullptr) return 0;  // 若结点是叶子结点则最大深度为1
    int dl = dfs(root->left);
    int dr = dfs(root->right);
    ans = std::max(dl + dr + 1, ans);  // 每棵树的最大直径等于左子树深度加右子树深度
    return std::max(dl, dr) + 1; // 返回当结点的最大深度
  }
}