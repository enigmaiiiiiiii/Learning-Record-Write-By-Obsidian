# Java Annotation

- [Introduction](#introduction)
- [Custom Annotation](#custom-annotation)
- [Use Annotation](#use-annotation)
- [Built-in Annotation](#built-in-annotation)
- [Annotation接口](#annotation接口)

## Introduction

- 注解是源代码中标签
- 编译器对于包含注解和不包含注解的代码会生成相同的虚拟机指令

## Custom Annotation

[Custom Annotation](Java_Custom_Annotation_Type.md)

## Use Annotation

- can be used declarations of classed, fileds, methods

```java
@ClassPreamble(
    auther = "John Doe",
    date = "01/01/2017",
    reviewers = {"Alice", "Bob", "Charlie"}
)
public class Generation3List {
    // ...
}
```

使用单值注解

- 可以省略`value=`

```java
@Copyright("2017")
public class Generation3List {
    // ...
}
```

## Built-in Annotation

Normal Built-in Annotation

- `@Deprecated`
- `@Override`:
- `@FunctionalInterface`: 用于标记[函数式接口](Java_Functional_Interface.md)
- `@SuppressWarnings`
- `@SafeVarargs`

应用于其他注解的注解, or called meta annotation

- `@Retention`
  - RetentionPolicy.SOURCE: 不包括在类文件中的注解
  - RetentionPolicy.CLASS: 包括在类文件中的注解, 但是虚拟机额不需要将他们载入
  - RetentionPolicy.RUNTIME: 包括在类文件中的注解，并由虚拟机载入, **通过反射可访问**
- `@Repeatable`: 允许同一个元素多次使用同一个注解
- `@Documented`: elements using this should documented by javadoc tools
- `@Target`: 限制注解的作用元素
- `@Inherited`: 注解类型被自动继承
  - 查找这种类型的注解时, 若没有在当前类中找到, 则会在其父类中查找
  - 查找过程会一直沿着继承链向上查找, **直到找到**或**达到Object**

## Annotation接口

[Interface Annotation](Java_Interface_Annotation.md)
