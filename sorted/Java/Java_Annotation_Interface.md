# 注解

- 注解是源代码中标签
- 编译器对于包含注解和不包含注解的代码会生成相同的虚拟机指令

## 定义注解

[定义注解](Java_Annotation_Definition.md)

## 使用注解

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

- 可以省略value=

```java
@Copyright("2017")
public class Generation3List {
    // ...
}
```

## 预定义的注解

- @Deprecated
- @Override
- @FunctionalInterface

应用于其他注解的注解

- @Retention
  - RetentionPolicy.SOURCE: 不包括在类文件中的注解
  - RetentionPolicy.CLASS: 包括在类文件中的注解, 但是虚拟机额不需要将他们载入
  - RetentionPolicy.RUNTIME: 包括在类文件中的注解，并由虚拟机载入, **通过反射可访问**
- @Documented
- @Target: 限制注释类型的作用元素

## Annotation接口

[Interface Annotation](Java_Interface_Annotation.md)
