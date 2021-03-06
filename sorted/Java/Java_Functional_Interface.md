# 函数式接口

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

## 函数式接口的实例

[lambda表达式](Java_Lambda.md)

[方法引用](Java_Method_References.md)

方法引用

- `ClassName::MethodName`
- `this::instanceMethod`
- `super::instanceMethod`

构造器引用

- `ClassName::new`

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

## @FunctionalInterface标记

- 编译器会检查该接口是否为函数式接口
- javadoc会指出这是一个函数式接口

## 常用函数式接口

|函数式接口|参数类型|返回类型|抽象方法名|描述| 其他方法 |
|--|--|--|--|--| -- |
| Runnable | 无 | void | run | 作为无参数或无返回值的动作 | |
| Supplier<T> | 无 | T | get | 提供一个T类型的值 |  |
| Consumer<T> | T | void | accept | 处理T类型的值 | andThen |
| BiConsumer<T, U> | T, U | void | accept | 处理T类型和U类型的值 | andThen |
| Function<T, R> | T | R | apply | 有一个T类型参数的函数 | compose, andThen, identity |

## 基本类型函数式接口

|函数式接口|参数类型|返回类型|抽象方法名|
|--|--|--|--|
|BooleanSupplier|none|boolean|getAsBoolean|
|PSupplier|none|p|getAsP|
|PConsumer|p|void|accept|
