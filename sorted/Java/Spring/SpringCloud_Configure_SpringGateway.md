# 配置

## 服务一的application.yml

```yml
server:
  port: 9001
spring:
  application:
    name: beijing # 定义当前服务名称
  cloud:
    nacos:
      discovery:
        server-addr: localhost:8848 # 指定正在运行的Nacos服务器的位置
```

## 服务二的application.yml

```yml
server:
  port: 9002
spring:
  application:
    name: shanghai # 定义当前服务名称
  cloud:
    nacos:
      discovery:
        server-addr: localhost:8848 # 指定正在运行的Nacos服务器的位置
```

## gateway项目启动程序

```java
package com.example.gateway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class GatewayApplication {

    public static void main(String[] args) {
        SpringApplication.run(GatewayApplication.class, args);
    }

}
```

## gateway项目配置

```yml
spring:
  cloud:
    gateway:
      routes:
        - id: payment_route  # 路由id
          uri: lb://nacos-payment-provider  # 路由地址
          predicates:
            - Path=/payment/get/** # 匹配路径
```

routes:

- id:
- uri: 配置到Nacos的名称
- predicates: 谓词, 配置规则, 包括after, before, between, cookie, header, host, method, path, query, remoteAddr, weight, add
  - `-after=2020-01-01T00:00:00.00Z`: 2020年1月1日0点0分0秒之后, 其它的还有before, between
  > 格式为ZoneDataTime.now()
  - `-query=foo`: 请求中需要包含的参数
- filter: 
  - `-AddRequestHeader=X-Request-foo, Bar`: 添加请求头
  - `-AddRequestPatameter=age, 18`: 添加请求参数

## 配置动态路由

```yml
spring:
  cloud:
    gateway:
      # 添加动态路由
      discovery:
        locator:
          enabled: true
      # 添加路径
      routes:
        - id: payment_route  # 路由id
          uri: lb://nacos_service_name  # 路由地址
          predicates:
            - Path=/payment/get/** # 匹配路径
```

- 假设gateway程序端口为9000, 服务一端口为9001, 服务二端口为9002
- 配置后，外界访问时先访问网关端口, localhost:9000/nacos_service_name/req
- 网关会根据nacos_service_name配置的路由规则, 转发到服务一或者服务二
