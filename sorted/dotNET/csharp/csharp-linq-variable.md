# CSharp - LINQ Variable

- LINQ查询可以返回两种类型
  - 可以是一个枚举
  - 也可以是单一值
- LINQ查询结果的返回值复制给查询变量, 可以用var声明
- 查询执行的时间
  - 返回枚举，直到处理枚举时才会执行
  - 枚举被处理多次，查询就会执行多次
  - 遍历之后，查询之前，数据有改动，查询会使用新的数据 
  - 如果返回标量，查询立即执行, 并将结果保存到查询变量中
