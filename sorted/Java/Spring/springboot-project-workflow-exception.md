# SpringBoot Workflow - Exception

## What's For

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

why custom exception

- for concrete exception

## Global Exception Handler

exception/GlobleExceptionHandler.java

- Global Exception Handler is a class with annotation `@ControllerAdvice`
- 方法声明添加`@ExceptionHandler()`, 表示处理异常的方法, 参数要处理的异常类
- method with annotation `@ExceptionHandler` is to indicate this method is used to handle exception, and the parameter indicates which exception this method will handle
  - annation parameter is the [**class type**](java-reflect-class.md) of exception, can be an **array** of exception class type
  - `@ExceptionHandler(value={exception1.class, exception2.class})`表示两类异常
- 异常处理方法包括
  - `ServiceException`: 自定义异常
  - `BindException`: 参数校验异常, 由validation框架抛出的异常
  - `Throwable`: 其他异常
  - `BadCrendentialsException`: Spring Security, 登录异常
  - `InternalAuthenticationServiceException`: Spring Security, 登录异常

> 添加处理异常超类**Throwable**的方法, 并在返回页面中告知用户发生了服务器错误


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

SpringSecurity的异常处理方法

```java
@ExceptionHandler({
        InternalAuthenticationServiceException.class,
        BadCredentialsException.class
})
public JsonResult handleAuthenticationException(AuthenticationException e){
    log.debug("捕获到AuthenticationException");
    log.debug("异常类型：{}", e.getClass().getName());
    log.debug("异常信息：{}", e.getMessage());
    String message = "登录失败，用户名或密码错！";
    return JsonResult.fail(ServiceCode.ERR_UNAUTHORIZED, message);
}
```
