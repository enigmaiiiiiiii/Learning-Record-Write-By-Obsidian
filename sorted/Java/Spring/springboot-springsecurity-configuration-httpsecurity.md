# http安全配置 

## 配置请求授权

```java
@Override
protected void configure(HttpSecurity http) throws Exception {
    http.authorizeReqauests()
            .antMatchers("/").permitAll()  // 允许所有人访问
            .antMatchers("/admin/**").hasRole("ADMIN")  // 需要ADMIN角色
            .antMatchers("/user/**").hasAnyRole("ADMIN", "USER")  // 需要ADMIN或USER角色
            .and().formLogin();  // 使用表单登录
}
```

- `antMatchers(String... antPatterns)`: 指定请求路径
- `antMatchers()`的顺序很重要

## 配置登录机制

```java
@Override
protected void configure(final HttpSecurity http) throws Exception {
    http
      // ...
      .and()
      .formLogin()
      .loginPage("/login.html")
      .loginProcessingUrl("/perform_login")
      .defaultSuccessUrl("/homepage.html", true)
      .failureUrl("/login.html?error=true")
      .failureHandler(authenticationFailureHandler())
      .and()
      .logout()
      .logoutUrl("/perform_logout")
      .deleteCookies("JSESSIONID")
      .logoutSuccessHandler(logoutSuccessHandler());
}
```

- `loginPage(String loginPage)`: 指定登录页面
- `loginProcessingUrl(String loginProcessingUrl)`: 处理登录URL
- `defaultSuccessUrl(String defaultSuccessUrl, boolean alwaysUse)`: 登录成功后跳转的URL
- `failureUrl(String failureUrl)`: 登录失败后跳转的URL
- `logoutUrl(String logoutUrl)`: 处理注销URL



