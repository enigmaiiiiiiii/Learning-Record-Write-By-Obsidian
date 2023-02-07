# 类

## Initialization

[Initialization](java-class-initialize.md)

## this

- 构造方法中调用`this(param list)`应在其他可执行语句之前, super构造语句之后

## Abstract Class

```java
public abstract class AbstractClass {
    public abstract void abstractMethod();
}
```

- **包含抽象方法**的类必须声明为抽象类
- 抽象类**可能包含**抽象方法
- 可以用来声明: `Foo a;`
- **不能**被实例化: `Foo a = new Foo();` is illegal
- sub type 必须覆盖抽象方法
- 用来被继承

## Nest Class

[嵌套类](java-nested-class.md)