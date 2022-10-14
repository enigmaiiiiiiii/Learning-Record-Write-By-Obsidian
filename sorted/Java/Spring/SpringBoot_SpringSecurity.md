# Spring Security

- 在spring MVC项目中使用spring security时，启动项目后，访问任何页面都会跳转到**登录页面**(一个包含用户名和密码输入框, 提交按钮的页面)
- 所有**请求**都必须通过认证

## 使用

添加依赖

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
</dependency>
```

## workflow

[Spring Security工作流程](SpringBoot_SpringSecurity_Workflow.md)

## 配置

[配置](SpringBoot_SpringSecurity_Configuration.md)

## Spring Security in Servlet

[Spring Security in Servlet](SpringBoot_SpringSecurity_In_Servlet.md)

## 密码编码器

- Spring Security 5.0 之后，密码必须使用加密的方式存储
- BCryptPasswordEncoder: 使用[BCrypt算法](../../../unsorted/Message_Digest_Algorithm.md)加密密码

PasswordEncode接口

```java
public Interface PasswordEncoder {
    String encode(CharSequence rawPassword);
    boolean matches(CharSequence rawPassword, String encodedPassword);
    boolean upgradeEncoding(String encodedPassword);
}
```

## 异常

- AuthenticationException: 认证异常
  - BadCredentialsException: 如用户名不存在
  - InternalAuthenticationServiceException: 
