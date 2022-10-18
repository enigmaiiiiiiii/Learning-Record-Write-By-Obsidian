# 基础认证

1. 用户提交用户名和密码, [BasicAutehnticationFilter](SpringSecurity_Common_Architecture.md#SecurityFilter)创建一个[Authentication](SpringSecurity_Authentication_Interface.md)实例`UsernamePasswordAuthenticationToken`, 其中包含有Http请求中用户名和密码的对象
2. UsernamePasswordAuthenticationToken实例传递给[AuthenticationManager](SpringSecurity_AuthenticationManager_Interface.md), 由[ProviderManager](SpringSecurity_ProviderManager.md)处理
3. 如果认证成功, 
- 认证过的Authentication保存在[SecurityContextHolder](SpringSecurity_SecurityContextHolder.md)中
- RememberMeService.loginSuccess()方法被调用
- BasicAuthenticationFilter调用FilterChain.doFilter(request, response)方法, 传递给下一个Filter
4. 如果认证失败, 则抛出异常, 由[AuthenticationEntryPoint](SpringSecurity_AuthenticationEntryPoint_Interface.md)处理