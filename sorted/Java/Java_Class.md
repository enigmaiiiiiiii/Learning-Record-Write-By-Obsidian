# 类

[初始化](Java_Class_Initialize.md)

## this

- 构造方法中调用`this(param list)`应在其他可执行语句之前, super构造语句之后

##  抽象Class

- 包含抽象方法的类必须声明为抽象类
- 抽象类可能包含抽象方法
- 不能被实例化
- 派生类必须覆盖抽象方法
- 用来被继承

## 匿名类

- 使代码更简洁
- 可以同时声明和实例化一个类
- 必须从[一个超类继承]或[实现一个接口]
- 被编译成OuterClassName$1.class文件

> 类没有名称, 如果一个局部类只需要使用一次，可以使用它们。

- 匿名类语法包含
  - new Operator
  - 要实现的接口或要扩展的类的名称
  - 创建一般类时，括号内的构造参数
  - 类声明体
- 访问权限
  - 有外围类成员的访问权限
  - 类只能访问声明为final或effectively final的局部变量

```java
new SuperClassName() {
    // Implement or override methods in superclass or interface
}
```