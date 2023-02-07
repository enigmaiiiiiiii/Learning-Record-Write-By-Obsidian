# 预定义的函数式接口

## Generic Functional Interface

| 函数式接口          | 参数类型 | 返回类型 | 抽象方法名 | 描述                       | 其他方法                   |
| ------------------- | -------- | -------- | ---------- | -------------------------- | -------------------------- |
| `Runnable`          | 无       | void     | run        | 作为无参数或无返回值的动作 |                            |
| `Supplier<T>`       | 无       | T        | get        | 提供一个 T 类型的值        |                            |
| `Consumer<T>`       | T        | void     | accept     | 处理 T 类型的值            | andThen                    |
| `BiConsumer<T, U>`  | T, U     | void     | accept     | 处理 T 类型和 U 类型的值   | andThen                    |
| `Function<T, R>`    | T        | R        | apply      | 有一个 T 类型参数的函数    | compose, andThen, identity |
| `BiFunction<T, U, R>` | T, U     | R        | apply      | 有一个 T 类型参数的函数    | andThen, identity |

这些函数接口 have a method `apply()`, 表示应用apply中的参数调用这个函数对象

example

- function type: `BiFunction<T, U, R>`
- method to use a function argument: `public String mergeString(String a, String b, BiFunction<T, U, R> func)`
- call the function argument with given parameter: `func.apply(a, b)`

```java
public class Demo {
    public String mergeString(String a, String b, BiFunction<T, U, R> func) {
        return func.apply(a, b);
    }

    public String fx(String a, String b) {
      return a + b;
    }

    public static void main(String[] args) {
        Demo demo = new Demo();
        String result = demo.mergeString("a", "b", demo::fx);
        System.out.println(result);
    }
}
```

## 基本类型函数式接口

| 函数式接口      | 参数类型 | 返回类型 | 抽象方法名   |
| --------------- | -------- | -------- | ------------ |
| BooleanSupplier | none     | boolean  | getAsBoolean |
| PSupplier       | none     | p        | getAsP       |
| PConsumer       | p        | void     | accept       |
