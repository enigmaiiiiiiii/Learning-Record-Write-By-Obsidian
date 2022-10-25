# Spring管理

## 引入Nacos依赖

支持注册到nacos的依赖, discovery发现服务

```xml
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-alibaba-nacos-discovery</artifactId>
</dependency>
```

添加项目配置

```yml
spring:
  application:
    name: nacos-payment-provider  # 服务名称
  cloud:
    nacos:
      discovery:
        server-addr: localhost:8848 # nacos地址
```
