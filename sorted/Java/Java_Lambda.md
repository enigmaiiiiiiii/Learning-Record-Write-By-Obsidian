# lambda表达式

```java
(type1 parameter1, type2 parameter2)->{
    // expression...
}
```

- lambda表达式可以捕获外部作用于自由变量的值
  - 不能改变捕获变量的值，因为在并发编程中是不安全的
  - 捕获的变量必须是[effectively final](Java_Keyword_Final.md)
- 在lambda中参数不能与 **lambda表达式所在的作用域(一对`{}`)**的局部变量同名

***

- 参数类型可以忽略, 只有一个参数，圆括号可以省略
- `->` arrow token
- 方法体

***

- 封闭作用域中[本地变量]的访问权限

## lambda Scope