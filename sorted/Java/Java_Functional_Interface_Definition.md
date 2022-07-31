# Java_Functional_Interface_Definition

## 定义

- 没有声明为 sealed 的接口
- 只有一个抽象方法
- 不是Object类中的public方法

一个包含run方法的函数式接口

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

## 示例

声明函数式接口

```java
@FunctionalInterface
publijc interface IntConsumer {
    void accept(int value);
}
```
接口类型作为参数的方法

```java
public class FunctionCaller {
    public void repeat(int n, IntConsumer action) {
        for (int i = 0; i < n; i++) {
            action.accept(i);
        }
    }
}
```

## \@FunctionalInterface标记

- 编译器会检查该接口是否为函数式接口
- javadoc会指出这是一个函数式接口