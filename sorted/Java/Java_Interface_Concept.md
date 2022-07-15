# 接口概念

- 接口不是类
- 关键字implement: 声明类实现了某个接口使用

***

- 可以包含[抽象方法](), [默认方法](), [静态方法]()
- 可以包含[常量声明], 接口中field声明默认public, static, final
  
以Comparable为例

```java
public interface Comparable
{
    int compareTo(Object other);
}
```

- 也就是说，任何实现Comparable接口的类都需要包含compareTo()方法



