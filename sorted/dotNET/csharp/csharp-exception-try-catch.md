# try...catch...finally

- try块内包含避免出现异常而保护的代码
- catch子句
  - 异常处理程序
  - 含有一个或多个catch子句
- finally任何情况下都要被执行的代码

## catch

```c#
catch
{
    Statements
}
```

匹配任何类型的异常

```c#
catch(ExceptionType)
{
    Statements
}
```

1. 带有异常类的名称作为单一参数
2. 匹配该类型的异常

```c#
catch(Exception e)
{
    Statements
}
```

1. 创建一个Exception类型的实例
2. 在catch子句内部访问，获得详细信息

## finally

- 总会执行，即使try中有return语句