# AnnotatedElement

- 当前VM中运行的程序的带注释结构
- 在元素上的AnnotatedElement, 称为declaration annotation
- 在type(class, interface, enum)上的AnnotatedElement, 称为type annotation
- 只存在与源文件中


## 声明注释类型

```java
@interface ClassPreamble {
    String author();
    String date();
    int crrentRevision() default 1;
    String lastModified() default "N/A";
    String lastModifiedBy() default "N/A";
    // Note user of array
    String[] reviewers();
}
```

> 想要使Classpreamble的注释信息出现在Javadoc-generated(JavaDoc命令生成)文档中, 要在注释类的定义上一行加@Documented 

## 使用注释类型

```java
@ClassPreamble(
    auther = "John Doe",
    date = "01/01/2017",
    currentRevision = 6,
    lastmodified = "01/01/2017", 
    lastModifiedBy = "John Doe",
    reviewers = {"Alice", "Bob", "Charlie"}
)
public class Generation3List {
    // ...
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