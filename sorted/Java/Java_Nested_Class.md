# Nested Class

## Inner Class(内部类)

- 本身不能定义任何静态成员

```java
class OuterClass {
    class InnerClass {
    }
}
```

- 实例化内部类必须先实例化外部类
- 内部类实例化语法
- 编译成OuterClass$InnerClass.class

```java
OuterClass outerObject = new OuterClass();
OuterClass.InnerClass innerObject = outerObject.new InnerClass();
```

## Static Inner Class(静态内部类)

- 不能通过外部类的实例调用new创建
- 不能直接引用外部类的实例变量

```java
OuterClass outerObject = new OuterClass();
StaticInnerClass innerObject = new StaticInnerClass();
StaticInnerClass innerObject = outerObject.new StaticInnerClass(); // 编译错误
```

## Local Class(局部类)

- 在[块]中定义的类，通常在方法体中
- 本身不能定义任何静态成员
- 可以定义[常量](Java_Constant.md)
- 访问权限
  - 本地类只能访问声明为final的本地变量
  - 可以访问[封闭块]()中的final或[effectively final](Java_Keyword_Final.md)局部变量
  - *自Java SE 8*, 开始可以访问所在方法的参数

## Anonymous Class(匿名类)

- 使代码更简洁
- 可以同时声明和实例化一个类
- 必须从[一个超类继承]或[实现一个接口]
- 被编译成OuterClassName$1.class文件

> 类没有名称, 如果一个局部类只需要使用一次，可以使用它们。

- 匿名类语法包含
  - new 运算符
  - 要实现的[接口]或要扩展的类的名称
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

## shadowing()

- 相同名称**变量或参数**, 特定作用域中的类型声明将屏蔽外围作用域

## Captured Variable(捕获变量)

## 闭包

[闭包](Java_Closure.md)