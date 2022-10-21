# AOP

- 目前(2022.10.19)只支持方法级别的AOP
- 通常用解决这些问题: 安全，事务，日志，缓存，性能监控，异常处理等

## 概念

- AOP: Aspect Oriented Programming, 面向切面编程
- 在spring中通过使用常规类或@Aspect注解的类来实现AOP
- 连接点(Join point): 在程序执行过程中能够插入切面的一个点, Spring中通常是**方法**
- 切入方式(Advice): around, before, after
  - **around**: 在连接点**前后**执行, 可以选择是否执行连接点
    - 最普遍的切入方式
  - before: 在连接点之前执行
  - after returning: 在连接点**正常完成**后执行
  - after throwing: 在连接点**抛出异常**后执行
  - after: 在连接点**完成**后执行
- 切入点(Pointcut): 匹配连接点的谓词
- target object
- AOP proxy: 
- Weaving:


## AOP编程

添加依赖

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-aop</artifactId>
</dependency>
```

声明Aspect

- 编写[组件](Spring_IoC.md)类DemoAspect.java
- 除了添加@Aspect注解外，还需要添加@Component注解，使Spring框架可以将其添加为注解

```java
@Slf4j
@Aspect
@Component
public class DemoAspect {
    // 声明切入点
    @Around("execution(* com.example.demo.service.*.*(..))")
    public void foo(ProceedingJoinPoint joinPoint) throws Throwable {
        log.info("before");
        joinPoint.proceed();
        log.info("after");
    }
}
```

- 参数`execution(return_type com.example.demo.package_name.class_name.method_name(..))`的解释: 匹配指定包下的指定类的指定方法
  - return_type: 返回类型
  - class_name: 类名
  - method_name: 方法名

  > 可以使用通配符

- 参数还可以是这些表达式
  - within
  - this
  - target
  - args
  - @this
  - @target
  - @args
  - @annotation

## ProceedingJoinPoint

- getSignature():  
- getArgs(): 连接点参数
- getTarget(): 
