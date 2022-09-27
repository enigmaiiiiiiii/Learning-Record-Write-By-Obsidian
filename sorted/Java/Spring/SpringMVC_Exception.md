# Spring异常处理机制

- `@ControllerAdvice`
  - 
- `@ExceptionHandler`
  - 处理异常类
  - 用于注解方法
  - 用在`@Controller`类中



## 添加注解

```java
@ExceptionHandler
public String handleException(Exception e) {
    // do something
    return e.message();
}
```

