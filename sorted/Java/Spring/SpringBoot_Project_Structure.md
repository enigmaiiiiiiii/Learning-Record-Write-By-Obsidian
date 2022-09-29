# 目录结构

## 配置

`spring.profile.active: val` 启用配置文件application-val的配置
`server.port: 8080` 设置端口号
`spring.Jackson.default-property-inclusion: non_null`: json结果中不包含null值

数据库配置

```yml
spring:
  datasource: jdbc:mysql://localhost:3306/db_name?useUnicode=true&characterEncoding=utf-8&serverTimezone=Asia/Shanghai
  # 配置数据库用户名密码
  username: root  
  password: root
```

## config

[配置类](SpringBoot_Project_Structure_ConfigClass.md)

## mapper

- 定义数据库映射接口

## pojo目录

[实体类](SpringBoot_Project_Structure_Pojo.md)

## controller目录

[controller](SpringBoot_Project_Structure_Controller.md)

## service

[service](SpringBoot_Project_Structure_Service.md)

## resource

- 配置SpringBoot: `application.yml`
- 配置MyBatis SQL语句映射: `/mapper/FooMapper.xml`

## exception

[自定义异常](SpringBoot_Project_Structure_Exception.md)

## web

- 定义响应状态和内容
- 包含的类
  - ServiceCode.java: 枚举
  - JsonResult.java: 用来定义响应结果对象


```java
public class JsonResult {

    private Integer state;
    private String message;

}
```

