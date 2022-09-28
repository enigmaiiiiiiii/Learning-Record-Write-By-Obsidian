# 目录结构


## 配置

```yml
spring:
  # 个性化配置
  profile:
    active: dev
  # Jackson配置
  jackson:
    # JSON结果中是否包含值为null的属性
    default-property-inclusion: non_null
```

## config

- 配置类的package
- 类上均添加`@Configuration`, 表示为配置类
- MybatisConfiguration.java
  - 添加`@MapperScan(val)`注解, 将val指定的包下的所有接口都作为Mapper接口


## mapper

- 定义数据库映射接口

## pojo目录

[实体类](SpringBoot_Project_Structure_Pojo.md)

## controller目录

[controller](SpringBoot_Project_Structure_Controller.md)

## service

[service](SpringBoot_Project_Structure_Service.md)

## resource

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

