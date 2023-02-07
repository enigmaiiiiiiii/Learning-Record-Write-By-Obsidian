# workflow

## 典型项目结构

- `<name>-sso`: 单点登录
  - Spring Security相关
  - 发放token
  - 解析token
- `<name>-common`: 公共模块
- `<name>-search`: 搜索模块
- `<name>-pojo`: 实体类
- `<name>-search`: 搜索模块
- `<name>-gateway`: 网关
- ...

## 项目模块化

[参考Spring多模块项目](springboot-multi-module.md)

## 使用配置中心

[]

[]

依赖

```xml
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-alibaba-nacos-config</artifactId>
    <version>0.2.1.RELEASE</version>
</dependency>
```

## 工具

[注册到Nacos](springcloud-use-nacos.md)

[使用dubbo](springcloud-configure-dubbo.md)

[使用seata](springcloud-use-seata.md)

[使用sentinel](springcloud-use-sentinel.md)

[使用gateway](springcloud-use-gateway.md)

[使用RabbitMQ](springcloud-use-rabbitmq.md)

[使用kafka](springcloud-use-kafka.md)

