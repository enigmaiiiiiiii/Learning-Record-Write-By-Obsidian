# 配置

- 有效位置
  - 项目根目录下的config文件夹中
  - 项目根目录
  - classpath下的config文件夹中
  - classpath目录

> 以yml文件为例

## application.yml

- yaml格式配置文件

## profile配置: 个性化配置

- 文件名: `application-<profile>.yml`
- 个性化配置文件固定格式: `application-<profile>.yml`
- 一般包含以下三个配置文件
  - application-dev.yml: 开发环境配置文件
  - application-prod.yml: 生产环境配置文件
  - application-test.yml: 测试环境配置文件

- 在`application.yml`指定使用哪个配置文件

```yml
spring:
  profiles:
    active: profile_name
```

## application.properties

- key=value格式的配置文件

## 定义在配置文件中使用变量

```yml
my:
  server:
    addr: 192.168.213.131

server: ${my.server.addr}:8080
```

## 定义在代码中使用的常量

application.yml

```yml
myVariable: "hello world"
```

Demo.java

```java
public class Demo{
  @Value("${myVariable}")
  private String myVariable;
}
```