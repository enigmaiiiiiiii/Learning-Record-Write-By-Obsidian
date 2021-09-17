# 合并二叉树

#递归 

```c++
class Solution {  
 public:  
  TreeNode *mergeTrees(TreeNode *root1, TreeNode *root2) {  
    if (!root1) {  
      return root2;  
    }  
    if (!root2) {  
      return root1;  
    }  
   
    auto *node = new TreeNode();  
    node->val = root1->val + root2->val;  
    node->left = mergeTrees(root1->left, root2->left);  
    node->right = mergeTrees(root1->right, root2->right);  
    return node;  
  }
};

```
1. 结点都为空
2. 一个为空一个不为空
3. 都不为空