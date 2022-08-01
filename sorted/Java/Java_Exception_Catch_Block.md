# Catch block

- 捕获exception类异常
- 每个catch块都是一个异常捕获程序
- 可以执行打印错误消息，暂停程序，错误恢复，提示用户做决定

## 捕获多个异常

- 不存在继承关系的异常类可以用多个catch block
- 捕获有继承关系`catch(FileNotFoundException | UnknownHostException e)`

## 再次抛出异常

```java
catch(SQLException e) 
{
    throw new ServletException("database error: " + e.getMessage());
}
```

## 链式异常

- 和其他异常一起抛出

```java
public class ChainedExceptionDemo {
    public static void main(String[] args) {
        try {
            method1();
        } catch(Exception ex) {
            ex.printStackTrace();
        }
    }
    public static void method1() throws Exception {
        try {
            method2();
        } catch (Exception ex) {
            throw new Exception("New info from method1", ex);
        }
    }
    public static void method2() throws Exception {
        throw new Exception("New info from method2");
    }
}
```

## 将异常设置为新异常的原因

```java
catch {
    Throwable se = new ServletException("database error");
    se.initCause(e);
    throw se;
}
```

使用getCause()得到原始异常

```java
Throwable e = se.getCause();
```

## 记录异常

```java
catch {
    logger.log(level, message, e);
    throw e;
}
```
