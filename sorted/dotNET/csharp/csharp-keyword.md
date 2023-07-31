# CSharp - Keywords

[yield](csharp-yield.md)

## using

## new

declared modifier

- display a member that is hidden by a similar named member in a base class

## out

parameter modifier

- pass a reference parameter to a method
  - the arugment need not be initialized before calling the method
  - but must assign a value before returning

## params

- declare a variable parameter
- the type of the parameter must be a single-dimensional array
- no other parameter is allowed after params
- only one `params` is allowed

```cs
public void UseParams(params int[] list)
{
    for (int i = 0; i < list.Length; i++)
    {
        Console.Write(list[i] + " ");
    }
    Console.WriteLine();
}
```


## base

- 用于从派生类中访问基类成员
  - 调用基类上一辈其他方法重写的方法
- 基类是指派生体系中相邻的基类 
