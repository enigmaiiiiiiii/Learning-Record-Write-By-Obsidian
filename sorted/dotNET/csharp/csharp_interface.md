# 接口

- 指定一组函数成员而不实现他们的引用类型
- 用关键字`interface`声明接口
- 实现接口
  - 在基类列表后列出接口名称, 多个接口用`,`隔开
  - 为接口的每一个成员提供实现

## 访问接口成员

> 接口是[引用类型], 不能通过实现接口的成员访问接口

- 访问接口成员的两种方法
  - 可以通过[强制转换]类对象的引用为接口类型的引用, 就可以通过`.`操作符访问接口成员
  - as运算符实现访问接口成员
- 转换为类没有实现的接口时，强制转换会抛出异常, as方式返回null
