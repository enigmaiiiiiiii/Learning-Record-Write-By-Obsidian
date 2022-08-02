# 异常类

- 所用异常由Throwable继承而来, Throwable分解为两个分支Error和Exception

## Error类

- Error是普通程序通常无法恢复的所有异常的超类。
- 应用程序不应该抛出这种类型的对象。
- 出现这样的内部错误，除了通告给用户，并尽力使程序安全地终止之外，再也无能为力了
- 不能用catch block捕获
- 这种情况很少出现

## Exception类

- 所有Exception类的超类
- RuntimeException: 相当于c++中的logic_error

  > 异常情况
  >> 1. 错误的类型转换  
  >> 2. 数组访问越界  
  >> 3. 访问null指针  

- 其他Exception: 相当于c++中的runtime_error

  > 异常情况
  >> 1. 在文件结束后读取后面的数据  
  >> 2. 打开一个不存在的文件  
  >> 3. 通过字符串查找一个不存在Class  

## 自定义异常

- 定义一个类派生自Exception类或Exception子类
- 通常有两个构造器
  - 默认构造器
  - 带有详细描述信息的构造器

```java
class FileFormatException extends IOException {

    public FileFormatException() {}

    public FileFormatException(String gripe) {
        super(gripe);
    }

    public Exception(String message, Throwable cause) {
        super(message, cause);
    }

    public Exception(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {

    }

    Exception(Throwable cause) {
        super(cause);
    }
}
```

## 异常信息

- 异常对象中包含异常信息
  - printStackTrace(): 控制台打印栈调用信息, 返回StackTraceElement对象
  - getMessage(): 控制台打印Throwable对象和调用栈信息