# 接口概念

- 接口不是类
- 关键字implement: 声明类实现了某个接口使用

***
  
以Comparable为例

```java
public interface Comparable
{
    int compareTo(Object other);
}
```

- 也就是说，任何实现Comparable接口的类都需要包含compareTo()方法
