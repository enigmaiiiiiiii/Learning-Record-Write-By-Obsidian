# 配置

- 有效位置
  - 项目根目录下的config文件夹中
  - 项目根目录
  - classpath下的config文件夹中
  - classpath目录

## application.yml

- yaml格式配置文件

## application.properties

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
    active: env_name
```
