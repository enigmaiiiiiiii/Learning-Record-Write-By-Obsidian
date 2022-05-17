# 通过where约束类型和次序

约束子句： `where TypeParam : type1, type2,...`

- 约束类型及次序
  - class
  - struct: 任何值类型
  - 接口名: 接口或实现接口的类
  - new(): 任何带有**无参公共构造函数**的类型都可以用作类型的实参
