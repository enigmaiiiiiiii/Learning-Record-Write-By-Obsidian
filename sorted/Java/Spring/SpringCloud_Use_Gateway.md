# GateWay

[SpringGateway](SpringGateway.md)

- Nacos的一部分, 因此使用网关时, 需要先启动Nacos

## 配置

```yml
spring:
  cloud:
    gateway:
      routes:
        - id: payment_route  # 路由id
          uri: http://localhost:8001
          predicates:
            - Path=/payment/get/** # 匹配路径
```

routes:

- id:
- uri: 配置到Nacos的名称
- predicates:

