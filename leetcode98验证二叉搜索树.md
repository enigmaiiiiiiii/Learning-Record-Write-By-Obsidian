# 验证二叉搜索树

#中序遍历 #二叉搜索树

```c++
class Solution {
 public:
  bool isValidBST(TreeNode* root) {
    fx(root);
    for (int i = 1; i < ret.size(); i++) {
      if (ret[i - 1] >= ret[i]) return false;
    }
    return true;
  }
  
  std::vector<int> ret;
  
  void fx(TreeNode* root) { // ret是一个升序数组
    // 递归中序遍历
    if (root == nullptr) return;
    fx(root->left);
    ret.push_back(root->val);
    fx(root->right);
  }
};
```