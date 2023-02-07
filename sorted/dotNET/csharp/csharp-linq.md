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

[匿名类型](csharp-anonymous-types.md)

[查询变量](csharp-linq-variable.md)

[表达式结构](csharp-linq-expression.md)

[标准查询API](csharp-linq-standard-api.md)


