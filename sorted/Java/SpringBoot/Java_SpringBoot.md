# SpringBoot

[Quick Start](https://spring.io/quickstart)

```
Group: com.example
Artifact: demo
Name: application name
Description: project Description
Package name: com.example.demo 
```

[SpringBoot项目目录结构](SpringBoot_Directory_Structure.md)

## 配置

[SringBoot配置](Java_SpringBoot_Configuration.md)

## 注解

[注解列表](Java_SpringBoot_Annotation_List.md)

## SpringMVC

[SpringMVC 流程](Java_SpringMVC_Workflow.md): workflow of SpringMVC

[配置SQL语句](Java_SpringMVC_Config_SQL.md)

[SpringWeb](Java_SpringBoot_SpringWeb.md)

[SpringBoot使用MyBatis](Java_SpringBoot_MyBatis.md)

## 跨域请求 

[SpringBoot响应跨域请求](Java_SpringBoot_Cross_Domain.md)

- 响应[跨域请求](Http_CORS.md)
- 启动类实现WebMvcConfigurer接口
- override addCorsMappings方法

```java
@Override
public void addCorsMappings(CorsRegistry registry) {
    registry.addMapping("/**")
            .allowCredentials(true)
            .allowedHeaders("*")
            .allowedMethods("*")
            .allowedOriginPatterns("*")
            .maxAge(3600);
}
```
