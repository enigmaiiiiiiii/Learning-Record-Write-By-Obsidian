# 类

[初始化](Java_Class_Initialize.md)

## this

- 构造方法中调用`this(param list)`应在其他可执行语句之前, super构造语句之后

## 抽象Class

```java
public abstract class AbstractClass {
    public abstract void abstractMethod();
}
```

- 包含抽象方法的类必须声明为抽象类
- 抽象类可能包含抽象方法
- 可以用来声明
- 不能被实例化
- 派生类必须覆盖抽象方法
- 用来被继承
