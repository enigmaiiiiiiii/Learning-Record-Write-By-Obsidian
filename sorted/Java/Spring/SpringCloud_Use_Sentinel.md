# 使用Sentinel

## 添加依赖

```xml
<dependency>
    <groupId>com.alibaba.cloud<groupId>
    <artifactId>spring-cloud-starter-alibaba-sentinel</artifactId>
</dependency>
```

## SpringBoot项目配置

```yml
spring:
  cloud:
    sentinel:
      transport:
        # 控制台地址
        dashboard: localhost:8080
        port: 8719
```

## 启动

## 添加注解

`@SentinelResource`

- 注解方法, 用于定义资源是否被限流或降级，并提供可选的异常处理
  - 降级: 
  - 限流
- 参数
  - value: 资源名称, **必须**
  - entryType: 入口类型, 默认为`EntryType.OUT`
  - blockHandler="handleMethod": blockException处理方法
    - handleMethod为处理blockException的方法名
    - handleMethod方法必须为public
    - handleMethod返回类型必须与原方法一致
    - handleMethod方法参数与原方法一致, 最后**必须**有一个额外的参数`BlockException`
    - 默认和**被注解方法**在同一个类中
  - fallback=fallbackMethod: 配置**降级**处理方法
    - fallbackMethod为处理Throwable的方法名
    - fallbackMethod返回类型必须与原方法一致
    - fallbackMethod方法参数与原方法一致, 最后**必须**有一个额外的参数`Throwable`
    - 默认和**被注解方法**在同一个类中
  - defaultFallback: 默认降级处理方法
    - 默认和**被注解方法**在同一个类中
