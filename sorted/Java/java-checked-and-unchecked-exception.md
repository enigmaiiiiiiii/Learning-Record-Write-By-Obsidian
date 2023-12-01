# Java - Checked And Unchecked Exceptions

## Checked Exception

- 其他异常称为checked异常
- 必须被处理, 两种处理方j式
  1. 在方法中声明异常
  2. 在try-catch块中调用

## Unchecked Exception

- unchecked exception: Exception that inherit from [Error]() or [RuntimeException]()
- it is impossible to predict and recover from these errors in most cases
- can be catched, but it is not required to catch unchecked exception

> Runtime Exception: 
>> 设计者认为声明Run-time 异常对程序正确性没有太大帮助
>> Java编译器可用的信息和编译器执行的分析级别通常不足以确定这种运行时异常不会发生

  
## When to declare checked exception

- 调用一个抛出受查异常的方法
- 程序运行过程中发现错误
- 程序出现错误
- Java虚拟机和运行时库出现的内部错误

