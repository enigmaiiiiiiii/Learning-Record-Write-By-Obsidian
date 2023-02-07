# 异常类

- 所有异常类派生自System.Exception类。
- 一些属性
  - Message: 解释异常原因的消息
  - StackTrace: 描述异常发生在何处的消息
  - InnerException: 如果一个异常是由另一个异常引起的，这个属性包含前一个异常引用
  - HelpLink: 可以被定义的属性，可以设置为信息的URN或URL
  - Source: 异常所在程序集的名称