# 目录结构

## config

## mapper

- 定义数据库映射接口

## pojo目录

- 用于存放实体类 
- 子目录
  - entity目录
    - DemoEntity.java: 实体类
  - VO目录
    - DemoEntityStandardVO.java: 查询详情
    - DemoEntityListItemVO.java: 查询列表

## controller目录

- 功能
  - 处理网络请求
  - 返回响应
  - 处理异常, catch语句块
- 包含`@RestController`注解的类(.java文件), 和`@XXXMapping`注解的方法
- 通常`@RequestMapping("/prefix")`注解在类上, 用于定义类中的所有方法的请求资源的前缀部分
- 用`@GetMapping("/name")`, `@PostMapping("/name")` 等衍生注解来定义请求资源的后缀部分

## service

service
│   IDemoService.java
│   
└───impl
        DemoServiceImpl.java

- 作用
  - 定义和实现业务逻辑接口
  - 与数据库完成交互
- 处理业务的逻辑[接口](../Java_Interface.md)
  - IDemoService.java: 业务逻辑接口
  - 接口命名规范I+业务名+Service, 如IDemoService
- 实现业务逻辑类
  - `@Service`注解的类
  - 实现接口
  - 使用impl后缀

IDemoService.java

```java
public interface IDemoService {
}
```

- 子目录
  - impl目录: 业务逻辑接口实现类
- 实现类的编写
  - insert
  - delete
    - 删除不存在的条目应抛出异常
  - select
  - update

## resource

## exception

> 为什么要自定义异常类?
> 用于确定具体异常类型

- 作用
  - 定义**自定义异常类**和**异常处理类**
  - 为Controller提供统一的异常处理方法
- 自定义异常类
  - 继承`Exception`或`RuntimeException`
- 异常处理类
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

