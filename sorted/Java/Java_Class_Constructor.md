# 构造器

- 与类同名
- 一个类可以有多个构造器
- 没有返回值
- 总是伴随着new(不同于c++)

## 使用this调用另一个构造器

```java
public Emplouee(double s)
{
    this("Employee #" + nextId, s);  // 将调用
    nextId++;
}
```

