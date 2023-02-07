# 字面值常量类

- 数据成员必须时字面值类型
- 必须含有一个constexpr构造函数

## constexpr构造函数

- 既是构造函数，又是[constexpr函数](c++-constexpr-function.md)

> 意味着不能含返回语句，唯一可拥有的语句是返回语句, 所以consteptr构造函数体通常是空的

- constexpr构造函数必须初始换所有数据成员
  - 值初始化
  - constexpr构造函数
  - 或是一条常量表达式