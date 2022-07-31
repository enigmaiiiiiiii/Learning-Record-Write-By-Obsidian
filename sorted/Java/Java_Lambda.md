# lambda表达式

lamdba由以下三部分构成:

```java
(type1 parameter1, type2 parameter2)->{
    // expression...
}
```

1. 参数类型可以忽略, 只有一个参数，圆括号可以省略
2. `->` arrow token
3. 方法体

- 方法体只有一个**表达式**时，则自动返回该表达式的值
- 方法体是一个语句，lambda表达式返回值可以是语句本身的返回值，也可以是void

```java
// 需要一个返回boolean的函数式接口的实例
Predicate<String> p = (String s) -> list.add(s);  
// 需要一个返回void的函数式接口的实例
Consumer<String> b = (String s) -> list.add(s);
```

## 变量访问

- lambda表达式可以捕获外部作用于自由变量的值
  - 不能改变捕获变量的值，因为在并发编程中是不安全的
  - 捕获的变量必须是[effectively final](Java_Keyword_Final.md)
- lambda的参数不能与 **lambda表达式所在的作用域(一对`{}`)**的[局部变量]同名
- lambda中的this与包含lambda的上下文有关

## lambda的类型

[目标类型]

- 只能在定义了目标类型的上下文中指定lambda表达式
- 当将lambda表达式赋值给函数接口引用时，将创建一个实例

> 目标类型上下文包括变量赋值，变量初始化, 返回语句和方法参数, 强制类型转换

```java
Object o = ()->{System.out.println("Hello");}  // Object不是函数式接口, 无法根据上下文推断出lambda的类型
Object o = (Runnable)()->{System.out.println("Hello");}  // 强制转换
```
