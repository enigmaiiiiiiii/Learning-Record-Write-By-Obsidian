# Java Functional Interface Definition

- [Define A Functional Interface](#define-a-functional-interface)
- [Take A Look](#take-a-look)
- [Use `@FunctionalInterface` Annotation](#use-functionalinterface-annotation)

## Define A Functional Interface

- 只有一个**抽象**方法, 意味着
  - 可以包含Object类中的public方法
  - 不能包含Object类中的non-public方法
- 没有声明为 sealed 的接口

如: 一个包含run方法的函数式接口

```java
interface Runnable {
    void run();
}
```

包含Object中的方法的接口不是函数式接口

```java
interface NonFunc {
    boolean equals(Object obj);  // 不是函数式接口
}
```

## Take A Look

声明函数式接口

```java
@FunctionalInterface
publijc interface IntConsumer {
    void accept(int value);
}
```

参数类型为**函数接口**的方法

```java
public class FunctionCaller {
    public void repeat(int n, IntConsumer action) {
        for (int i = 0; i < n; i++) {
            action.accept(i);
        }
    }
}
```

## Use `@FunctionalInterface` Annotation

- 编译器会检查该接口是否为函数式接口
- javadoc会指出这是一个函数式接口
