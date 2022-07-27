# 异常

[概念](Java_Exception_Concept.md)

[声明异常](Java_Eception_Declaration.md)

[异常处理程序](Java_Exception_Handling.md)

## 异常类

[异常类](Java_Exception_Class.md)

[checked/unchecked Exception](Java_Checked_And_Unchecked_Exception.md)


## 产生异常的原因

- 执行了一个throw语句
- Java虚拟机同步检测到一个异常的执行情况，即:
  - 表达式的求值违反了Java编程语言的正常语义，例如整数被零除
  - 在[加载、链接或初始化]()部分程序时发生错误;在这种情况下，抛出一个LinkageError子类的实例
  - 内部错误或资源限制阻止Java虚拟机实现Java编程语言的语义;在这种情况下，抛出VirtualMachineError子类的一个实例
- 异步异常发生 
  - 调用Thread或ThreadGroup类的stop方法(已弃用)
  - Java虚拟机中的内部错误或资源限制，使其无法实现Java编程语言的语义。在这种情况下，抛出的异步异常是VirtualMachineError子类的一个实例。