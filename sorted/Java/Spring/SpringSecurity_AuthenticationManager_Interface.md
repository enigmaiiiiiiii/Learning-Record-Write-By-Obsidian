# Interface AuthenticationManager

包含**一个方法**: `Authentication authenticate(Authentication authentication) throws AuthenticationException`

- 用于**认证**传入其中[authentication](SpringSecurity_Authentication_Interface.md)对象, 并返回一个认证后的authentication

参数

- `authentication`: 一个`Authentication`对象

返回值

- 返回一个**认证过**或者说**填充过**的`Authentication`对象

一个该接口的实现类**必须履行**以下抛出异常的相关职责

- 如果账户被禁用, 则抛出**DisabledException**, 此状态可以被AuthenticationManager测试
- 如果账户被锁定, 则抛出**LockedException**, 此状态可以被AuthenticationManager测试
- 如果凭据错误, 则抛出**BadCredentialsException**, 实现类**必须执行凭据验证**
- 按以上顺序进行测试, 可以防止对禁用或锁定账户进行凭据验证

> 不同的`ProviderManager`实现类可以共享同一个`AuthenticationManager`, 就像 `SecurityFilterChain` 包含各种 认证机制

## 常用的AuthenticationManager的实现类: ProviderManager

[ProviderManager](SpringSecurity_ProviderManager.md)

- AuthenticationManager: 最常见的实现类是`ProviderManager`
  - AuthenticationProvider: 一个`ProviderManager`可以包含多个`AuthenticationProvider`
