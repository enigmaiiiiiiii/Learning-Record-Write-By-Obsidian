# 配置文件

```yml
# 设置端口号
server.port: 8080
```

## 个性化配置

```yml
# 启用配置文件application-val的配置
spring.profile.active: val
```

## 数据库配置

连接一个数据源

```yml
spring:
  datasource: 
    # 数据库地址
    url: jdbc:mysql://localhost:3306/db_name?useUnicode=true&characterEncoding=utf-8&serverTimezone=Asia/Shanghai
    # 配置数据库用户名密码
    username: root  
    password: root
```

连接两个数据库时的配置方式

- 需要在[配置类](SpringBoot_Project_Workflow_configClass.md#datasourceconfigurationjava)添加纤细配置

```yml
spring:
  datasource:
    first:
      url: ...
      username: ...
      password: ...
      driverClassName: ...
    second:
      url: ...
      username: ...
      password: ...
      driverClassName: ...
```

## Mybatis配置

[Mybatis配置](SpringBoot_MyBatis.md#2-配置)

## Spring Security相关

- 配置[jwt签名](../../Network/Http_Token.md#jwt)
  - 格式: 项目名.jwt.secret-key: xxx
- 配置失效时间


```yml
project-name:
  jwt:
    secret-key: 123456
    duration-minutes: 3600
```

## 其它配置

API文档

```yml
knife4j.enable: true
```

json数据

```yml
# json结果中不包含null值
spring.Jackson.default-property-inclusion: non_null
```