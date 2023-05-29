# KMP Algorithm(pattern matching algorithm)

> named by creator's name: Knuth-Morris-Pratt

- use pattern string to generate prefix table(next array)
  - init suffix index `i`, prefix index `j`
  - considering the different of prefix and suffix, `while (j > -1 && s[i] != s[j + 1]) {j = next[j]}`
  - considering the same of prefix and suffix, `if (s[i] == s[j + 1]) {j++}`
  - assign the value of [`next`](#prefix-table-next-array) element `next[i] = j;`
- 使用前缀表匹配
  - 文本串`s[i]`, 模式串`t[j]`
  - 遍历文本串`for (int i = 0;i < s.size(); i++)`
  - 文本串与模式串不匹配: `while (j >= 0 && s[i] != t[j]) j = next[j];`
  - 文本串与字符串匹配:`if (s[i] == t[j]) j++;`
- mostly apply to string matching
- KMP won't backtrace the original string, so it's faster than brute force algorithm

## prefix table next array

- next数组
  - size等于模式串的长度
  - 元素: 分别得到所有包含首字符的子串,前缀与后缀最长相同长度
  - 前后缀不同j回溯
  - 前后缀相同`j++`
  - j have two meanings
    - next element
    - index of return position

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