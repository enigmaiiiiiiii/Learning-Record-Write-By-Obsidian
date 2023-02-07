# 函数式接口

## 定义

[定义](java-functional-interface-definition.md)

## 函数式接口的实例

1. [lambda表达式](java-lambda.md)

2. 方法引用

- `ClassName::MethodName` 通过类名调用
- `this::instanceMethod`
- `super::instanceMethod`

```java
public class MethodReference {
    public static void main(String[] args) {
    }

    public void takeMethodFunc(String a, String b, Function<T> func) {
        func.apply(a, b);
    }

    public void fx()

}
```

3.contructor reference

- `ClassName::new`

## 预定义的函数式接口

[预定义函数式接口](java-funcitonal-interface-preimplement.md)
