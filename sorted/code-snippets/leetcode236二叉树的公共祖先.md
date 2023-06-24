# code

#深度优先搜索 

```c++
class Solution {
 public:
  TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
    dfs(root, p, q);
    return ans;
  }
  TreeNode* ans;
  bool dfs(TreeNode* root, TreeNode* p, TreeNode* q) {
    if (root == nullptr) return false;
    bool curNode = (root->val == p->val || root->val == q->val);
    bool inleft = dfs(root->left, p, q); 
    bool inright = dfs(root->right, p, q);
    if ((inleft && inright) || (curNode && (inleft || inright))) {
      ans = root;
    }
    return inleft || inright || curNode;
  }
}
```

- 递归返回bool值
- 最近的公共结点有两种情况
  - p和q结点分别位于最近的公共祖先结点左右子树
    - 对应判断条件：`inleft && inright`
  - p或q的其中一个是另一个的祖先
    - 对应判断条件：`curNode && (inleft || inright)`
  