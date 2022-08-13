# 注释接口

## 声明注释接口

```java
@interface ClassPreamble {
    String author();
    String date();
    // Note user of array
    String[] reviewers();
}
```

- 不能声明为泛型
- 声明位置限制
  - 可以是顶级接口或[成员接口], 不能是局部接口
  - 出现在局部类， 局部接口，匿名类声明中发生编译错误

> 想要使Classpreamble的注释信息出现在Javadoc-generated(JavaDoc命令生成)文档中, 要在注释类的定义上一行加@Documented

## 注释接口元素

- 注释接口元素: 注释接口中的方法声明
  - 不能有形参, 类型参数
  - 不能有throws语句
  - 

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

## 预定义的注释类型

- @Deprecated
- @Override
- @FunctionalInterface

应用于其他注释类型的注释类型

- @Retention
- @Documented
- @Target: 限制注释类型的作用元素

## AnnotatedElement接口

- 当前VM中运行的程序的带注释结构
- 实现了AnnotatedElement接口的类
  - [x] [AccessibleObject](Java_Reflect_AccessibleObject.md)
  - [x] [Class](Java_Reflect_Class.md)
  - [ ] Constructor
  - [ ] Executable
  - [x] Field
  - [x] Method
  - [ ] Module
  - [ ] Package
  - [ ] Parameter
  - [ ] RecordComponent
- 在元素上的AnnotatedElement, 称为declaration annotation
- 在type(class, interface, enum)上的AnnotatedElement, 称为type annotation