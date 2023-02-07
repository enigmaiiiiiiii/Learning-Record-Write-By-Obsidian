# 基础认证

1. 用户提交用户名和密码, [BasicAutehnticationFilter](springsecurity-common-architecture.md#securityfilter)创建一个[Authentication](springsecurity-authentication-interface.md)实例`UsernamePasswordAuthenticationToken`, 其中包含有Http请求中用户名和密码的对象
2. UsernamePasswordAuthenticationToken实例传递给[AuthenticationManager](springsecurity-authenticationmanager-interface.md), 由[ProviderManager](springsecurity-providermanager.md)处理
3. 如果认证成功, 
- 认证过的Authentication保存在[SecurityContextHolder](springsecurity-securitycontextholder.md)中
- RememberMeService.loginSuccess()方法被调用
- BasicAuthenticationFilter调用FilterChain.doFilter(request, response)方法, 传递给下一个Filter
4. 如果认证失败, 则抛出异常, 由[AuthenticationEntryPoint](springsecurity-authenticationentrypoint-interface.md)处理