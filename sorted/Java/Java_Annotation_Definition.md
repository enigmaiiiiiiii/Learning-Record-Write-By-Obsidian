# 定义注解

```java
public @interface ClassPreamble {
    String author();
    String date() default "[unassigned]";  // 默认值
    // Note user of array
    String[] reviewers();
}
```

- 不能声明为泛型
- 所有注释接口扩展自java.lang.annotation.Annotation
- 所以[注释接口不能扩展](Java_Extend_Class.md)
- 声明位置限制
  - 可以是顶级接口或[成员接口], 不能是局部(local)接口
  - 出现在局部类, 局部接口, 匿名类声明中发生编译错误

> 想要使Classpreamble的注释信息出现在Javadoc-generated(JavaDoc命令生成)文档中, 要在注释类的定义上一行加@Documented

## 注解的元素

- **注解元素**: 注释接口中的方法声明
- 限制
  - 不能有形参, 类型参数
  - 不能有throws语句
  - 不能是private, default, static
  - 返回类型限定为：
    - 基本类型
    - String
    - Class类
    - enum class type
    - annotation interface type
    - 由以上类型元素组成的数组(排除嵌套数组)
- 不能覆盖Object类和java.lang.annotation.Annotation类声明为public和protexted的方法
- 注释接口类型`T`不能包含类型`T`的元素

```java
// this is illegal
@interface SelfRef {SelfRef value();}
```

## 标记注解(Marked Annotation Interface)

- 没有元素, 或
- 所有元素都使用默认值

## 单值注解(Single-Element Annotation Interface)  

- 只有一个元素的注释接口
- 按照约定, 单元素注释接口元素名称为value

```java
public @interface Copyright {
    String value();
}
```

## (Repeatable)可重复接口

```java
@Repeatable(FooContainer.class)
@interface Foo {
    String value();
}

@interface FooContainer {
    Foo[] value();
}
```

- 可重复接口
