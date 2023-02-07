# Try With Resources

> 用finally子句调用close关闭资源时，也可能会抛出IOException异常, 这种情况下，try句抛出的异常会丢失, 而抛出close异常

- 用于自动关闭资源

```java
try (Resource res = ) {
    // ...
}
```

- try块退出时，自动调用res.close()
- close()方法抛出的异常会被抑制, 由getSuppressed方法增加到原来的异常

## AutoCloseable接口

声明在try-with-resources块中的AutoCloseable对象会自动调用close()方法

```java
interface AutoCloseable {
    void close() throws Exception;
}
```
