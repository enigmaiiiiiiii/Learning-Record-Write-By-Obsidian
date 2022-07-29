# lambda表达式

lamdba由以下三部分构成:

1. 参数类型可以忽略, 只有一个参数，圆括号可以省略
2. `->` arrow token
3. 方法体

- lambda方法体只有一个表达式时，则自动返回该表达式的值

```java
(type1 parameter1, type2 parameter2)->{
    // expression...
}
```

## 变量访问

- lambda表达式可以捕获外部作用于自由变量的值
  - 不能改变捕获变量的值，因为在并发编程中是不安全的
  - 捕获的变量必须是[effectively final](Java_Keyword_Final.md)
- lambda的参数不能与 **lambda表达式所在的作用域(一对`{}`)**的[局部变量]同名
- lambda中的this与包含lambda的上下文有关

***

## 封闭作用域中[本地变量]的访问权限

## lambda Scope

