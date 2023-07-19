# CSharp - Keywords

[yield](csharp-yield.md)

## using

- 定义一个范围，在此范围的末尾将释放对象。
- 为命名空间创建别名，或导入在其他命名空间中定义的类型

## new

用作声明修饰符

- 显示隐藏从基类继承的成员

## out

参数修饰符

- 传递引用参数，传递之前不必初始化，返回之前必须赋一个值

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
