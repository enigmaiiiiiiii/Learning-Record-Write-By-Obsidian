# 继承

- Java不支持多继承
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
  
- 子类方法抛出的[异常]小于或等于超类方法
- 子类方法可见性不能低于超类

  > 超类为public, 子类方法一定为public

## 多态

> 在Java中, [编译期]允许子类数组引用转换超类引用而不需要强制转换; [运行时]，子类数组存储超类对象会引发ArrayStoreException

- 变量调用的方法由[引用的对象类型](Java_Variable.md)决定, 而不是[变量声明的类型](Java_Variable.md)
- 不能将超类的引用赋值给子类
- 子类对象也是超类对象

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

## 类型转换

- 超类转子类前，应使用instanceof检查

## 抽象类

```java
public abstract class Person
{
    public abstract String getDescription();
}
```

- 抽象类不能被实例化, 可以声明抽象类变量
- 抽象类的[变量]()可以引用一个体系中子类对象

***

- 子类实现全部抽象方法，子类不再是抽象类
- 子类实现部分抽象类方法或不实现抽象类方法，子类也必须被标记为抽象类

## 受保护的访问

- protected关键字 
- Java中派生体系内的类和同一个包中的类可见

> c++中派生体系内的类可见, 派生体系外的类不可见 

## 继承设计技巧

1. 公共方法和field放在超类
2. 不要使用protected filed
  - 任何子类可访问protected field
  - 同一[package](Java_Package.md)可访问protected field
3. `is a`关系使用继承实现，避免滥用继承
4. 除非所有的方法都有意义，否则不要使用继承
5. 覆盖方法时不改变方法的内涵
6. 使用多态，而非类型信息

```
if (x is of type1) {
    action1(x);
}
else if (x is of type2) {
    action2(x);
}
```

> 如果action1, action2执行相同功能，应该定义一个方法放在超类或[接口](Java_Interface.md)中

7. 不要滥用反射