# Method

## Abstract Method

- keyword `abstract`
- provide **signature** ，**return type**，**throw exception type**
- no implement

## Default Method

- add keyword `default` before method
- 主要用于Interface
- 隐式声明为public, 因此public关键字可省略
- 默认方法能够向库的接口添加新功能，并确保与为这些接口的旧版本编写的代码的二进制兼容性

## Static Method

- 隐式声明为public, 因此public关键字可省略
- 与**类**关联，而不是与任何**实例**关联
- 通过类名直接访问

## Method Signature

- method name and parameter list

## Method Overloading

- same method name, different parameter list

> unrelated to the return type


## inline method

- java中，方法是否内联是Java虚拟机的任务
- 简洁，经常被调用，没有被重载以及可优化的方法

## 方法的参数

- Cannot modify a parameter of a primitive type.
- Can change the state (content) of an object parameter.
- Cannot make an object reference a new object.
- Passing method: It is passed by value.

An example to demonstrate function parameter passing method

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

## mutable parameters  

- declare by `foo(type... args)` syntax
- access by `args[i]` in method body

```java
public static double max(double... values) {
    double largest = Double.NEGATIVE_INFINITY;
    for (double v : values) {
        if (v > largest) largest = v;
    }
    return largest;
}
```
