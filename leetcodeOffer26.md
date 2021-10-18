# code

#递归  #双重递归


```c++
class Solution {  
 public:  
  bool isSubStructure(TreeNode *A, TreeNode *B) {  
    return (A && B) && (fx(A, B) || isSubStructure(A->left, B) || isSubStructure(A->right, B));  
 }  
  
  bool fx(TreeNode *A, TreeNode *B) {  
    if (B == nullptr) {  
      return true;  
    }  
    if (A == nullptr || A->val != B->val) {  
     return false;  
    }  
    bool isleft = fx(A->left, B->left);  
    bool isright = fx(A->right, B->right);  
    return isleft && isright;  
 }  
};
```

- 结点A和结点B不相等时，递归A结点
- A和B结点相等时，同时递归A，B结点