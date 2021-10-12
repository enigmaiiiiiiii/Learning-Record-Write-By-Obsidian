# code 

#深度优先搜索 

[看动画，学习回溯法解八皇后问题，这次完全明白了，递归算法设计 - 知乎 (zhihu.com)](https://www.zhihu.com/zvideo/1351172039898755072)


```c++
class Solution {  
 public:  
  std::vector<std::vector<std::string>> solveNQueens(int n) {  
    std::vector<std::string> queen;  // 用来表示皇后位置
    std::vector<std::vector<int>> attack;  // 皇后的攻击范围
    std::vector<std::vector<std::string>> ret;  
    for (int i = 0; i < n; i++) {  
      attack.push_back((std::vector<int>()));  
      for (int j = 0; j < n; j++) {  
        attack[i].push_back(0);  
      }  
      queen.push_back("");  // 第i行加入空字符串
      queen[i].append(n, '.');  // 在第i行空字符串中加入n个字符".",表示该位置没有皇后
    }  
    // 初始化攻击范围二维数组, 和皇后棋子位置数组
    backtrack(0, n, queen, attack, ret);  
    return ret;  
  }  
  void put_queen(int x, int y, std::vector<std::vector<int>> &attack) {  
    std::vector<std::vector<int>> queen;  
    static const int dx[] = {-1, 1, 0, 0, -1, -1, 1, 1};  
    static const int dy[] = {0, 0, -1, 1, -1, 1, -1, 1};  
    ///  dx, dy共同组成8个方向上， 下， 左， 右， 左上， 右上， 坐下， 右下  
    attack[x][y] = 1;  
    for (int i = 1; i < attack.size(); i++) {  
      for (int j = 0; j < 8; j++) {  
        int nx = x + i * dx[j];  
        int ny = y + i * dy[j];  
        if (nx >= 0 && nx < attack.size() && ny >= 0 && ny < attack.size()) {  
          attack[nx][ny] = 1;  
        }  
      }  
    }  
  }  
  void backtrack(int k, int n, std::vector<std::string> &queen,  
    std::vector<std::vector<int>> &attack,  
    std::vector<std::vector<std::string>> &ans) {  
    /// 包含递归和回溯  
    if (k == n) { /// 递归返回条件  
      ans.push_back(queen);  
      return; 
    }  
    for (int i = 0; i < n; i++) {  
      if (attack[k][i] == 0) {   /// 寻找当前行中  
        std::vector<std::vector<int>> tmp = attack;  
        queen[k][i] = 'Q'; // 标记皇后位置  
        put_queen(k, i, attack);  
        backtrack(k + 1, n, queen, attack, ans);  
        attack = tmp; /// 递归返回时，attack可能已被改变, 需要回溯还原  
        queen[k][i] = '.'; // 还原  
      }  
    }  
  }  
};
```

## 分解

### 抽象过程

- 皇后位置`std::vector<std::string>`,用n行字符串，每行n个字符的表示
  - 字符`'.'` 表示该位置为空
  - 字符`'Q'` 表示该位置有棋子
- 皇后的攻击范围`std::vector<std::vector<int>>`,$n \times n$的二维数组
  - 可以攻击到的位置为$1$
  - 攻击不到的位置为$0$
- 攻击范围
  - `static const int dx[] = {-1, 1, 0, 0, -1, -1, 1, 1};`
  - `static const int dy[] = {0, 0, -1, 1, -1, 1, -1, 1};` 
  -  dx, dy共同组成8个方向上， 下， 左， 右， 左上， 右上， 坐下， 右下  

### 搜索

- 由深度优先和回溯构成
- `backtrack(int k, int n, std::vector<std::string> &queen, std::vector<std::vector<int>> &attack, std::vector<std::vector<std::string>> &ans)`
  - `k` 当前遍历行
  - `n` 棋盘大小
  - `attack`数组当前元素
  - `queen`当前皇后位置
  - `ans` 答案数组
- 遍历第一行每个位置: `for (int j = 0; j < n; j++)`
- 每次遍历放置一个棋子 `queen[i][j] = 'Q'`
- 将皇后攻击范围填充到二维数组`attack`, 即攻击范围元素等于1
- 进入下层递归, 即`k + 1`行
- 寻找当前行可放置棋子的位置, 

```c++
for (int j = 0; j < n; j++) {
  if (attack[k][j] == 1) {
    std::vector<std::vector<int>> tmp = attack;
    queen[k][j] = 'Q';
    back(k + 1, n, attack, queen, ans);
    attack = tmp;  // 回溯
    queen[k][j] = '.';
  }
}
```

## 返回条件

- `k == n`, 表示每行都有位置防止皇后棋子，此时的`queen`数组时正确答案之一
- 隐藏的返回条件`attack[k]`元素全为1时返回，第k行全为1，返回上一行尝试其他位置
 