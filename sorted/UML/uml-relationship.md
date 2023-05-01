# 关系

## 关联

- 用实线将关联类连接, 单向关联中箭头指向被关联对象
- 表示一个类中对对另一个类的对象的引用

## 泛化(继承)

- 派生类指向基类: 实线 + 空心三角箭头, 箭头指向基类
- 主流[面向对象](c++-object-oriented-programming.md)语言中的继承
  -  派生类继承基类的所有特性, 并且可能覆盖基类的方法
  - [可替换性](c++-object-oriented-programming.md#有继承关系的类型之间的转换): 在任何可以使用基类的代码中，应该能够替换为派生类

## 依赖

- 虚线 + 箭头, 箭头指向被依赖方
- 描述类之间的全局变量，参数变量，局部对象，静态方法

## 聚合

- 菱形 + 实线 + 箭头，箭头指向合成类
- 表示一个类由另一个类组成