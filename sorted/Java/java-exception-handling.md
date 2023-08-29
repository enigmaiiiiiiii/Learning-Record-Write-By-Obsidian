# Java - Exception handler

## Exception Handling Process

1. 错误程序退出: 程序发生错误，不会返回任何值，会通过另外一个路径退出方法
2. 抛出异常: 抛出封装错误信息的对象
3. 搜索: 从错误的方法开始，按照调用方法的栈顶开始，遍历调用栈, 搜索能够处理该程序的异常处理器
4. 匹配类型: 如果抛出的异常对象的类型与该处理程序可以处理的类型相匹配，则认为异常处理程序是合适的
5. 处理: 当找到适当的处理程序时，运行时系统将异常传递给处理程序
6. 捕获: 被选中的处理程序成为捕获异常

## Try Block

- 包含一个或多个可能引发异常的代码
- 如果try语句中抛出了异常，程序将跳过try语句块的其余代码
  - 因此通常不在try语句块执行资源的close()方法

## Catch Block

[Catch Block](java-exception-catch-block.md)

## Finally Block

- will be executed after try block exits
- Executed even an exception is raised

> finally block is more suitable for executing `close()` method of resource

- try block is allowed to only have finally block without catch block
- return value in finally block will override return value in try block

## Use try...with block handle resource

[try...with block](java-try-with-resources.md)
