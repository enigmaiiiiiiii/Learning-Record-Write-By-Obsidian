# Binary Tree preorder Traversal

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
