# 基于表单的认证

- 加入Spring Security依赖后，所有请求都必须通过认证
- 认证方式
  - Spring Security提供的登录页面
  - AuthenticationManagerBuilder认证

SecurityFilterChain机制

从*用户向未授权的资源(如/private)发起**未经验证**的请求*开始

1. FilterSecurityInterceptor拦截请求, 并抛出AccessDeniedException异常
2. 由于用户未经验证, ExceptionTranslationFilter初始化一个身份验证程序, 并使用配置的AuthenticationEntryPoint发送一个重定向页面
3. 浏览器请求到登录页面

**用户提交用户名和密码后**

1. UserPasswordAuthenticationFilter创建一个UsernamePasswordAuthenticationToken, 一个Authentication类型, 这个类型会提取请求中的用户名和密码
2. 上一步创建的类型传给AuthenticationManager去验证
3. 如果验证失败
  - SecurityContextHolder清空
  - RememberMeServices.loginFail被调用
  - AuthenticationFailHandler被调用
4. 如果验证成功
  - Authentication 设置到SecurityContextHolder
  - RememberMeServices.loginSuccess被调用
  - ApplicationEventPublisher发布一个InteractiveAuthenticationSuccessEvent事件
  - AuthenticationSuccessHandler被调用, 通常是一个SimpleUrlAuthenticationSuccessHandler**可调用对象**, 用于重定向到之前保存在ExceptionTranslationFilter中的请求
