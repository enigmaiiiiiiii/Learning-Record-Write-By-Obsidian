# Algorithm - Double Pointers

- 用于**有序**数组双元素遍历
- 一个指针遍历,一个指针操作
- 关键在于操作指针合适移动
- 也称滑动窗口

## 利用快慢指针删除字符串中的空格

- 快指针扫描，慢指针录入符合条件的**字符**
- 慢指针录入条件,同时满足以下三个条件
  - `fast > 1;`
  - `s[fast - 1] == s[fast];`
  - `s[fast] == ' ';`
- 最终结果为begin到**慢指针所指字符**
- 通过resize成员函数进行裁剪

## example

[[leetcode3无重复字符串的最长子串]]