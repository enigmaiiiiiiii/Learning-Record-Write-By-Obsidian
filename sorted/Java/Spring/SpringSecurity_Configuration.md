# 配置

1. 继承`WebSecurityConfigurerAdapter`类
2. 重写`configure(HttpSecurity http)`方法
3. 重写`configure(AuthenticationManagerBuilder auth)`

```java
@Configuration
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        // 配置用户
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        // 请求授权
    }

    @Bean
    protected PasswordEncoder passwordEncoder() {
        // 密码加密
    }
}
```

## 身份验证管理: Authentication Manager

```java
@Override
protected void configure(final AuthenticationManagerBuilder auth) throws Exception {
    auth.inMemoryAuthentication()
        .withUser("user1").password(passwordEncoder().encode("user1Pass")).roles("USER")
        .and()
        .withUser("user2").password(passwordEncoder().encode("user2Pass")).roles("USER")
        .and()
        .withUser("admin").password(passwordEncoder().encode("adminPass")).roles("ADMIN");
}
```

- 设置密码编码器passwordEncoder 
  - 将密码编码器配置为Spring的[组件](Spring_Component.md)  

```java
@Configuration
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {
    @Bean
    protected PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

}
```

## http安全配置: HttpSecurity 

[HttpSecurity](SpringBoot_SpringSecurity_Configuration_HttpSecurity.md)


## 在web应用中使用Spring Security

> **！SpringBoot中不是必须的**

## 使用XML可以同样可以完成以上配置

