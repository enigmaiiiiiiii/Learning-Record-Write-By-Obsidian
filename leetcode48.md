# 旋转方阵

- 90度顺时针旋转
- 旋转前的元素$matrix[i][j]$, 旋转后的位置$matrix[j][n - i - 1l]$
- 将元素$matrix[i][j]$, 拷贝到新矩阵的对应位置: `ret[j][n - i - 1] = matrix[i][j];`

```c++
class Solution {  
 public:  
  void rotate(std::vector<std::vector<int>> &matrix) {  
  /// 使用额外矩阵
    unsigned int n = matrix.size();  
    auto ret = matrix;  
    for (int i = 0; i < n; i++) {  
      for (int j = 0; j < n; j++) {  
        ret[j][n - i - 1] = matrix[i][j];  
      }  
    }  
  }  
  void rotate_element(std::vector<std::vector<int>> &matrix) {  
  /// 不使用额外矩阵
    unsigned int n = matrix.size();  
    for (int i = 0; i < n / 2; i++) {  
      for (int j = 0; j < (n + 1) / 2; j++) {  
        int tmp = matrix[i][j];  
        matrix[i][j] = matrix[n - j - 1][i];  
        matrix[n - j - 1][i] = matrix[n - i - 1][n - j - 1];  
        matrix[n - i -1][n - j - 1] = matrix[j][n - i - 1];  
        matrix[j][n - i - 1] = tmp;  
      }  
    }  
  }
};
```
