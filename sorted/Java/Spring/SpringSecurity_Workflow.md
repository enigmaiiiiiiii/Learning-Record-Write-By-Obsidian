# Workflow

添加配置类继承WebSecurityConfigurerAdapter

```java
@Configuration
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {
    // ...
}
```

## 设置登录信息

UserDetailServiceImpl.java

```java
```

## 捕获异常

## 单点登录

- 在认证服务端登录成功后，获得jwt后, 在请求中携带jwt, 服务端可以识别客户身份
- 复制相关依赖项
  - `spring-boot-starter-security`
  - `jjwt`
  - `fastjson`
- 复制`application-dev.yml`中关于JWT的自定义配置
- `LoginPrincipal`
- `ServiceCode`（更新文件，在`passport`中添加了一些新的业务状态码，在`product`中也将需要使用到）
- `JwtAuthorizationFilter`
- `SecurityConfiguration`
  - 删除`PasswordEncoder`的`@Bean`方法
  - 删除`AuthenticationManager`的`@Bean`方法
  - 删除`configurer()`方法中“白名单”中的 `"/admins/login"` 路径
- `GlobalExceptionHandler`（更新文件，处理“无操作权限”相关异常）
