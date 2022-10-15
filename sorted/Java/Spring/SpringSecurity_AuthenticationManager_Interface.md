# Interface AuthenticationManager

包含一个方法: `Authentication authenticate(Authentication authentication) throws AuthenticationException`

- 用于认证传入其中authenticatiol对象, 并放回一个认证后的对象
- 参数`authentication`: 一个`Authentication`对象
- 返回一个**认证过**或者说**填充过**的`Authentication`对象
- 一个该接口的实现类必须履行以下抛出异常的相关职责
  - 如果账户被禁用, 则抛出`DisabledException`, 此状态可以被AuthenticationManager测试
  - 如果账户被锁定, 则抛出LockedException, 此状态可以被AuthenticationManager测试
  - 如果凭据错误, 则抛出BadCredentialsException, **实现类必须执行凭据验证**
- 按以上顺序进行测试, 可以防止凭据对禁用或锁定账户进行测试

> AuthenticationManager
>> ProviderManager
>>> AuthenticationProvider

> 不同的`ProviderManager`实现类可以共享同一个`AuthenticationManager`, 就像 `SecurityFilterChain` 包含各种 认证机制

## ProviderManager

- 最常用的AuthenticationManager实现类
- ProviderManager将认证委托给一系列的`AuthenticationProvider`
  - 每种`AuthenticationProvider`都可以指示验证结果, 成功, 失败, 
  - Authentication可以指示验证类型不支持, 并允许下游Provider继续验证, 如果没有`Provider`支持, 则抛出`ProviderNotFoundException`
- 通过多种`AuthenticationProvider`实现, 可以实现多种认证方式, 并只暴露一个`AuthenticationManager`实例
- ProviderManager会清除被返回对象中敏感信息, 如密码 

### AuthenticationProvider

- 多个`AuthenticationProvider`可以注入到`ProviderManager`中
- 每种`AuthenticationProvider`都有一个特定的认证类型, 
  - DaoAuthenticationProvider: username/password验证
  - JwtAuthenticationProvider: JWT验证
