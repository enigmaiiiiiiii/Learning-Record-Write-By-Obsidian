# Interface Authentication

- 主要作用
  - **保存需要对比的数据库中的用户信息和用户输入的信息**
  - **待验证**用户身份: 作为[AuthenticationManager](SpringSecurity_AuthenticationManager_Interface.md)的输入
  - **已验证**用户身份: 保存在SecurityContext中
- Authentication包括
  - Principal: 主体，通常是[UserDetails]
  - credentials: 凭据，通常是密码，用户身份验证后清除
  - authorities: 权限，通常是角色


## UsernamePasswordAuthenticationToken

- Authentication的实现类

构造方法

- UsernamePasswordAuthenticationToken(Object principal, Object credentials)
  - principal: UserDetails
  - credentials: 密码
- Principal和credentials用来认证
  - Principal: 数据库中正确的用户信息
  - credentials: 用户输入的密码
- authorities用来授权