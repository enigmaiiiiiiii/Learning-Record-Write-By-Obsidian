# LINQ

## What Is LINQ

```c#
int[] numbers = {2, 5, 28};

IEnumerable<int> lowNums = from n in numbers
                           where n < 20
                           select n;
```

- LINQ允许使用SQL查询数据库的方式查询数据集合
- 使用LINQ可以从数据库，程序对象集合，XML文档中查询数据

Query Syntax

```c#
var numQuery = from n in numbers
               where n < 20
               select n;
```

LINQ Method

```c#
var numCount = numbers.Where(x => x < 20); 
```

[anonymous type](csharp-anonymous-types.md)

[query variable](csharp-linq-variable.md)

[expression structure](csharp-linq-expression.md)

[LINQ API](csharp-linq-standard-api.md)


