# Binnary inorder Traversal

#中序遍历 #迭代  #二叉树 #cpp 
- 中序遍历并输出

```c++ 
void fx(TreeNode *root) {  
  std::stack<TreeNode *> st;  
  while (!st.empty() || root != nullptr) {  
    while (root != nullptr) {  //  
      st.push(root);  
      root = root->left;  
    }  
    root = st.top();  
    std::cout << root->val << " ";  
    st.pop();  
    root = root->right;  
  }  
}
```
