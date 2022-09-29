# exception

> 为什么要自定义异常类?
> 用于确定具体异常类型

## 作用

- 定义**自定义异常类**和**异常处理类**
- 为Controller提供统一的异常处理方法
- 定义响应状态

## 自定义异常类

- 继承`Exception`或`RuntimeException`
- 定义异常状态码属性, 类型: ServiceCode枚举类型

```java
public class ServiceException extends RuntimeException {

    private ServiceCode serviceCode;

    public ServiceException(ServiceCode serviceCode) {
        this.serviceCode = serviceCode;
    }

    public ServiceException(ServiceCode serviceCode, String message) {
        super(message);
        this.serviceCode = serviceCode;
    }

    public ServiceCode getServiceCode() {
        return serviceCode;
    }

}
```

## 异常处理类

- 类声明添加`@ControllerAdvice`注解
- 方法声明添加`@ExceptionHandler`, 表示处理异常的方法, 参数要处理的异常类
  - 一个方法对应一类异常

```java
@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler
    public String handleException(CustomException e) {
        return e.getMessage();
    }
}
```

目前理解为: 

```java
public String handlerException() {
    try {
        // 业务逻辑
        controller.throwExceptionMethod();
    } catch (CustomException e) {
        return e.getMessage();
    }
}
```

- 推荐添加处理异常超类**Throwable**的方法, 并在返回页面中告知用户发生了服务器错误


## 响应码枚举类

ServiceCode类

```java
public enum ServiceCode {
    OK(200),
    ERR(400);

    private Integer value;

    private ServiceCode(Integer value) {
        this.value = value;
    }

    public Integer getValue() {
        return value;
    }
}
```