# Binary Tree preorder Traversal

#二叉树 #前序遍历 #迭代
- 前序遍历并输出

```c++
void fx(TreeNode* root) {
  std::stack<TreeNode*> st;
  while(!st.empty() || root != nullptr) {
    while(!root) {
      std::cout << root->val << " ";
      st.push(root);
      root = root->left;
    }
    root = st.top();
    st.pop();
    root = root->right;
  }
}
```