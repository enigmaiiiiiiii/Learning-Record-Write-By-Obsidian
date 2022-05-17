# LINQ

```c#
int[] numbers = {2, 5, 28};

IEnumerable<int> lowNums = from n in numbers
                           where n < 20
                           select n;
```

- LINQ允许使用SQL查询数据库的方式查询数据集合
- 使用LINQ可以从数据库，程序对象集合，XML文档中查询数据

查询语法

```c#
var numQuery = from n in numbers
               where n < 20
               select n;
```

方法语法

```c#
var numCount = numbers.Where(x => x < 20); 
```

[匿名类型](CSharp_Anonymous_Types.md)

[查询变量](CSharp_LINQ_Variable.md)

[表达式结构](CSharp_LINQ_Expression.md)

[标准查询API](CSharp_LINQ_Standard_API.md)


