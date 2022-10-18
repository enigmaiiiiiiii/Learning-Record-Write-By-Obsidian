# ProviderManager

- 最常用的[AuthenticationManager](SpringSecurity_AuthenticationManager_Interface.md)实现类
- ProviderManager将认证委托给多个的`AuthenticationProvider`
  - 每种`AuthenticationProvider`都可以指示验证结果, 成功, 失败, 
  - Authentication可以指示验证类型不支持, 并允许下游Provider继续验证, 如果没有`Provider`支持, 则抛出`ProviderNotFoundException`
- 通过多种`AuthenticationProvider`实现, 可以实现多种认证方式, 并只暴露一个`AuthenticationManager`实例
- ProviderManager会清除被返回对象中敏感信息, 如密码 

## AuthenticationProvider

- 完成具体的认证
- 多个`AuthenticationProvider`可以注入到`ProviderManager`中
- 每种`AuthenticationProvider`都有一个特定的认证类型, 比如
  - DaoAuthenticationProvider: **username/password验证**
  - JwtAuthenticationProvider: **JWT验证**

DaoAuthenticationProvider

1. Filter传递Authenctication到AuthenticationManager
2. ProviderManager选择DaoAuthenticationProvider
3. DaoAuthenticationProvider调用UserDetailsService.loadUserByUsername()方法, 获取UserDetails对象
4. DaoAuthenticationProvider使用PasswordEncoder对密码进行验证
5. 如果验证成功, 则返回一个Authentication对象, 一个UsernamepasswordAuthenticationToken实例, 其中包含有UserDetails, 

