# code

#深度优先搜索 

- 左括号数量大于等于右括号数量
- 深度优先搜索递归至左括号最多的情况开始层层返回

```c++
class Solution {  
 public:  
  std::vector<std::string>  generateParenthesis(int n) {  
    fx(n, 0, 0, "");  
    return ret;  
 }  
  std::string ans;  
  std::vector<std::string> ret;  
  void fx(int n, int lc, int rc, std::string str) {  
    if (lc == n && rc == n) {  
      ret.push_back(str);  
    } else {  
      if (lc < n) {  
        ans += "(";  
        if (lc + 1 == n && rc == n) std::cout << "当前序列:"<< ans << std::endl;  
        fx(n, lc + 1, rc, str + "(");  
        ans.pop_back();  
      }  
      if (rc < n && lc > rc) {  
        ans += ")";  
        if (lc == n && rc + 1 == n) std::cout << "当前序列:"<< ans << std::endl;  
        fx(n, lc, rc + 1, str +")");  
        ans.pop_back();  
      }  
    }  
  }  
};
```

