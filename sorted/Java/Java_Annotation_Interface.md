# 注释接口

## Annotation接口

[Interface Annotation](Java_Interface_Annotation.md)

## 定义注释接口

[定义注释接口](Java_Annotation_Definition.md)

## 使用注释类型

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

- marked annotation interface
  - 没有元素, 或
  - 所有元素都使用默认值
- 只有一个元素的注释接口称为single-element annotation interface
  - 按照约定, 单元素注释接口元素名称为value

  ```java
  @interface Copyright {
      String value();
  }
  ```

## 预定义的注释类型

- @Deprecated
- @Override
- @FunctionalInterface

应用于其他注释类型的注释类型

- @Retention
- @Documented
- @Target: 限制注释类型的作用元素