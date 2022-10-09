# 声明异常方法

> 遇到无法处理的情况, 方法不仅要返回值, 还要告诉编译器会可能发生什么错误, 即抛出异常

- 方法必须声明所有可能抛出的[checked异常](Java_Checked_And_Unchecked_Exception.md)
- 子类覆盖超类方法时, 抛出的异常种类不能更通用
- 关键字**throws**
- 多个异常用`,`隔开

```java
public void FileInputStream(String name) throws FileNotFoundException
{
    // ...
}
```

## 在方法体中抛出异常

> throw new Exception();

- 选择合适的异常类
- 创建这个类的一个对象`EOFException e`
- 将对象抛出`throw e`
- 关键字**throw**

> throw语句抛出: 将Exception对象从try block传递到catch block