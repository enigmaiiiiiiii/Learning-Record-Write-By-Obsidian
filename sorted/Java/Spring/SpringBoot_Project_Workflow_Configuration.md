# 配置文件

`spring.profile.active: val` 启用配置文件application-val的配置
`server.port: 8080` 设置端口号
`spring.Jackson.default-property-inclusion: non_null`: json结果中不包含null值

数据库配置

```yml
spring:
  datasource: 
    url: jdbc:mysql://localhost:3306/db_name?useUnicode=true&characterEncoding=utf-8&serverTimezone=Asia/Shanghai
    # 配置数据库用户名密码
    username: root  
    password: root
```

[Mybatis配置](SpringBoot_MyBatis.md#2-配置)

## 其它配置

API文档

```yml
knife4j.enable: true
```