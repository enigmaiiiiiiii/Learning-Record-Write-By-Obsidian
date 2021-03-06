# KMP算法(模式匹配算法)

> 以三位发明者名字的首字母

- 用模式字符串生成前缀表(next数组)
  - **初始化**后缀下标i，前缀下标j
  - 考虑前后缀**不同**的情况`while (j > -1 && s[i] != s[j + 1]) {j = next[j]}`
  - 考虑前后缀**相同**的情况`if (s[i] == s[j + 1]) {j++}`
  - 给next元素赋值`next[i] = j;`
- 使用前缀表匹配
  - 文本串`s[i]`, 模式串`t[j]`
  - 遍历文本串`for (int i = 0;i < s.size(); i++)`
  - 文本串与模式串不匹配: `while (j >= 0 && s[i] != t[j]) j = next[j];`
  - 文本串与字符串匹配:`if (s[i] == t[j]) j++;`
- 主要应用于字符串匹配
- KMP不会回溯原始字符串，所以速度较快

#### 关于前缀表next数组

- next数组
  - size等于模式串的长度
  - 元素: 分别得到所有包含首字符的子串,前缀与后缀最长相同长度
  - 前后缀不同j回溯
  - 前后缀相同`j++`
  - j有两个含义
    - next元素
    - 返回位置的下标

  ```c++
  void getNext(int* next, const string& s) {
    // j有两个含义：①下标，②next数组元素
    int j = -1;
    next[0] = j;
    for(int i = 1; i < s.size(); i++) { // 注意i从1开始
      while (j >= 0 && s[i] != s[j + 1]) { // 前后缀不同, 回退
        j = next[j]; // 向前回溯
      }
      if (s[i] == s[j + 1]) { // 找到相同的前后缀
        j++;
      }
      next[i] = j; // 将j（前缀的长度）赋给next[i]
    }
  }
  ```