# SpringBoot Validation

- 参数检查框架
- 用于**pojo类属性**，**方法的参数**
- 不满足要求时抛出异常
  - 对于pojo类属性不满足要求抛出`org.springframework.validation.BindException`
  - 单个参数检查不满足抛出`org.`

> [validation in spring boot](https://www.baeldung.com/spring-boot-bean-validation)

## 添加依赖

pom.xml

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-validation</artifactId>
</dependency>
```

## 使用

- @Validated: 标注在类上，表示封装为该类的请求参数需要执行检查
- 注解的message参数可以设置exception.getMessage() 

```java
@Validated
public class User {
    @NotNull(message = "用户名不能为空")
    private String username;
    @NotNull(message = "密码不能为空")
    private String password;
}
```

- @NotNull: 标注pojo类属性上

## 配置类

- 检查方式
  - 全部检查: 检查所有条件是否满足
  - 快速检查: 检查到第一个错误就停止检查

## 注解列表

`@NotNull` 被注释的元素必须不为 null
`@Min(value)` 被注释的元素必须是一个数字，其值必须大于等于指定的最小值
`@Max(value)` 被注释的元素必须是一个数字，其值必须小于等于指定的最大值
`@NotEmpty` 被注释的字符串的必须非空
`@NotBlank` 被注释的字符串不允许只包含空白字符
`@Pattern(regexp="<pattern>", flag="")`
