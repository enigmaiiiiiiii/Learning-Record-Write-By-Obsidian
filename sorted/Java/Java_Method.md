# 方法

## 抽象方法

- 关键字abstract
- 提供**签名** ，**返回类型**，**抛出异常类型**
- 不提供实现(没有大括号，以分号结尾)

## 默认方法

- 方法前 加 default关键字
- 主要用于Interface
- 隐式声明为public, 因此public关键字可省略
- 默认方法能够向库的接口添加新功能，并确保与为这些接口的旧版本编写的代码的二进制兼容性

## 静态方法

- 隐式声明为public, 因此public关键字可省略
- 与**类**关联，而不是与任何**实例**关联
- 通过类名直接访问

## 方法签名

- 方法签名: 方法名和参数列表

## 方法重载

- 相同的方法名称，不同的参数列表

> 与返回类型无关

## 更改器方法与访问器方法

- c++中: [const后缀]()方法是访问器方法, 默认更改器方法
- Java中: 语法上没有区别
- 访问器方法不应返回可变对象的引用

## 方法的[内联](c++_Inline_Function.md)

- java中，方法是否内联是Java虚拟机的任务
- 简洁，经常被调用，没有被重载以及可优化的方法

## 方法的参数

- 不能修改一个基本类型的参数
- 可以改变一个对象参数的状态(内容)
- 不能让对象引用一个新的对象

传递方式: 是按值传递(按照 *java核心技术 卷I 4.5*的描述)

传递方式说明代码

```java
public static void swap(Employee x, Employee y)
{
    Employee temp = x;
    x = y;
    y = temp;
}
Employee a = new Employee("Alice",1000);
Employee b = new Employee("Bob",2000);
swap(a, b);
```


## 可变参数

- `type... args`, 方法体内使用`args[i]`取值 

```java
public static double max(double... values) {
    double largest = Double.NEGATIVE_INFINITY;
    for (double v : values) {
        if (v > largest) largest = v;
    }
    return largest;
}
```
