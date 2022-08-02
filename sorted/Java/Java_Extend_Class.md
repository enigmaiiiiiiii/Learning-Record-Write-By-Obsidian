# 扩展超类

- Java中子类只能是单一类的扩展
- 已存在的类：超类,  基类，父类
- 新类： 子类, 派生类

## 定义子类

extends关键字

- 定义Manager类, 继承自Employee类的子类

```java
public class Manager extends Employee {}
```

## 调用超类

关键字super

- 调用超类方法`super.method()`
- 调用超类构造器`super(arg1, arg2,....);`

## 构造子类

- 若派生类的构造方法没有调用父类的构造方法，则默认在首句调用超类构造方法super()

## 覆盖方法

- 子类方法的[返回类型]小于或等于超类方法

  > 超类中返回 **某派生体系中超类** 的方法，在子类重写方法可以返回相同**派生体系中子类**
  
- 子类方法抛出的[异常]小于或等于(不抛出或少抛出)超类方法
- 子类方法可见性不能低于超类

  > 超类为public, 子类方法一定为public
  
- @Override标记

[参考c++中的override](c++_Virtual_Function.md#override关键字)

## 方法调用

- 静态绑定: private方法，static方法， final方法或者构造器
- 动态绑定: 

调用`e.getSalary()`的解析过程

1. 提取e的**实际类型**的方法表
2. 搜索getSalary()方法签名

## 方法表

- 列出了所有方法的签名和实际调用的方法

## 阻止继承

- 将类声明为final来阻止继承
  - 其方法自动声明为final
  - field不会声明为final
- 将方法声明为final, 子类就不能覆盖这个方法