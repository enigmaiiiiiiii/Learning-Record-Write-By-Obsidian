# Exception handler

## 处理过程

- 错误程序退出: 程序发生错误，不会返回任何值，会通过另外一个路径退出方法
- 抛出异常: 抛出封装错误信息的对象
- 搜索: 从错误的方法开始，按照调用方法的栈顶开始，遍历调用栈, 搜索能够处理该程序的异常处理器
- 匹配类型: 如果抛出的异常对象的类型与该处理程序可以处理的类型相匹配，则认为异常处理程序是合适的
- 处理: 当找到适当的处理程序时，运行时系统将异常传递给处理程序
- 捕获: 被选中的处理程序成为捕获异常

## Try Block

- 包含一个或多个可能引发异常的代码
- 如果try语句中抛出了异常，程序将跳过try语句块的其余代码
  - 因此通常不在try语句块执行资源的close()方法

## Catch Block

[Catch Block](Java_Exception_Catch_Block.md)

## Finally Block

- 在try Block退出时执行
- 即使发生异常也会执行Finally Block

> finally语句块更适合执行资源close()方法

- try语句可以只有finally, 没有catch
- finally中的返回值会覆盖try中的返回值

## 使用try-with-resources关闭资源

[使用try-with-resources关闭资源](Java_Try_With_Resources.md)
