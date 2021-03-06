# 泛型

- 是[类的模板](c++_template.md)

[泛型约束子句](CSharp_Generic_Constraint.md)

## 泛型方法

`public void PrintData<S, T>(S p, T t) where S: Person`

- 是成员, 不是类型
- 可以在泛型或非泛型类，结构，接口中声明
- 可推断参数类型，即可以省略`<>`

## 泛型扩展方法

同一般[扩展方法](CSharp_Extend_Method.md)

```c#
static class ExtendHolder
{
    public static void Print<T>(this Holder<T> h)
    {
        T[] vals = h.GetValue();
    }
}
```

## 泛型结构

[泛型委托](CSharp_Generic_Delegate.md)