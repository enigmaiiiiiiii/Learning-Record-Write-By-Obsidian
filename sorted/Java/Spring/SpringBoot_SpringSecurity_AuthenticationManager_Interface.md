# Interface AuthenticationManager

方法: `Authentication authenticate(Authentication authentication) throws AuthenticationException`

- 参数authentication: 一个Authentication对象
- 返回一个认证过的Authentication对象
- 一个该接口的实现类必须履行以下抛出异常的相关职责
  - 如果账户被禁用, 则抛出DisabledException, 此状态可以被AuthenticationManager测试
  - 如果账户被锁定, 则抛出LockedException, 此状态可以被AuthenticationManager测试
  - 如果凭据错误, 则抛出BadCredentialsException, **实现类必须执行凭据验证**
- 按以上顺序进行测试, 可以防止凭据对禁用或锁定账户进行测试

## ProviderManager

- 最常用的AuthenticationManager实现类