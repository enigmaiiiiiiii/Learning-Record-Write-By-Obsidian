# Binary Tree Post Traversal

 #后序遍历 #二叉树 #cpp 
 
```c++
void fx(TreeNode* root) {
  std::stack<TreeNode *> st;  
  TreeNode* prev = nullptr;  
  while (!st.empty() || root != nullptr) {  
    while (root != nullptr) {  // 保证了入栈结点不会为空  
    st.push(root); // 添加节点  
    root = root->left;  
    }  
    
    root = st.top(); // 栈顶结点  
    st.pop(); // 弹出结点  
    
    if (root->right == nullptr || root->right == prev) {  // 右结点为空 或 右结点已经被遍历过一次  
      // 说明此节点为叶子节点  
      std::cout << root->val << " ";  
      prev = root;  
      root = nullptr;  
    } else {  
      // 若结点有右节点，则先遍历右节点  
      st.push(root);  
      root = root->right;  
    }  
  }  
}
```