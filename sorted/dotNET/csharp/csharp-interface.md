# CSharp - Interface

## Declare Interface

```csharp
interface IMyInterface
{
    void methodA();
    double methodB(string s, long x);
}
```

## Implement Interface

- 必须为接口的每一个成员提供实现

```csharp
class MyClass: IMyInterface
{
    public void methodA() { ... }
    public double methodB(string s, long x) { ... }
}
```

- 如果继承了基类并实现接口, 接口名称必须在所有基类之后
- 多个接口用`,`隔开

## 访问接口成员

> 接口是[引用类型], 不能通过实现接口的成员访问接口

- 访问接口成员的两种方法
  - 可以通过[强制转换]类对象的引用为接口类型的引用, 就可以通过`.`操作符访问接口成员
  - as运算符实现访问接口成员
- 转换为类没有实现的接口时，强制转换会抛出异常, as方式返回null
