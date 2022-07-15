# lambda表达式

```java
(type parameter)->{
    // expression...
}
```
- lambda表达式可以捕获外部作用于自由变量的值
  - 不能改变捕获变量的值，因为在并发编程中是不安全的
  - 捕获的变量必须是最终变量(effectively final)
- 在lambda中参数不能与 **lambda表达式所在的作用域(一对`{}`)** 的局部变量同名