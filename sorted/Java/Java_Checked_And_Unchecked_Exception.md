# checked/unchecked exception

## unchecked exception

- unchecked异常: 派生于Error或RuntimeException的异常
- 通常存在不可恢复的逻辑错误
- 可以被捕获, 但是不强制要求捕获unchecked exception

> Runtime Exception: 
>> 设计者认为声明Run-time 异常对程序正确性没有太大帮助
>> Java编译器可用的信息和编译器执行的分析级别通常不足以确定这种运行时异常不会发生

## checked exception

- 其他异常称为checked异常
- 必须被处理, 两种处理方j式
  1. 在方法中声明异常
  2. 在try-catch块中调用
  
## 什么时候声明checked异常

- 调用一个抛出受查异常的方法
- 程序运行过程中发现错误
- 程序出现错误
- Java虚拟机和运行时库出现的内部错误

