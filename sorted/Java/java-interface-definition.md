# 定义接口

- 如果接口修饰符不指定public, 则认为只有相同的package拥有接口的访问权限
- 接口可以扩展(extends)其他接口, 接口可以扩展任意数量的接口

以Comparable为例

```java
public interface Comparable
{
    int compareTo(Object other);
}
```

> 也就是说，任何实现Comparable接口的类都需要包含compareTo()方法

## 接口中的方法声明

- 所有方法都是隐式public
- 可以包含[抽象方法](), [默认方法](), [静态方法]()
- 接口中以 `;` 结尾的方法是抽象方法
- 可以包含[常量声明], 接口中field声明默认`public static final`