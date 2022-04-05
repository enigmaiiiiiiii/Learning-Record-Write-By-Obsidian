# 自定义特性

- 和声明类一样，有两点需要注意
  - 继承自System.Attribute
  - 名称以Attribute结尾

## 定义特性

```c#
public customAttribute: System.Attribute
{
    private string name;
    public double version;

    public AuthorAttribute(string name)
    {
        this.name = name;
        version = 1.0;
    }

}
```

## 使用自定义特性

## 两种参数

- 位置特性参数: 对应特性构造函数的参数
- 命名参数: 对应公有字段或公有属性
