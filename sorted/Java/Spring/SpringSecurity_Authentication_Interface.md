# Interface Authentication

- 主要作用
  - **保存需要对比的数据库中的用户信息和用户输入的信息**
  - 作为**待验证**用户身份: [AuthenticationManager](SpringSecurity_AuthenticationManager_Interface.md).authenticate(authentication)方法的参数
  - 作为**已验证**用户身份: **AuthenticationManager.authenticate()**调用的返回值, 可以保存在SecurityContext中
- Authentication包括
  - Principal: 主体，通常是[UserDetails](SpringSecurity_UserDetails.md)
  - credentials: 凭据，通常是**用户输入的密码**，用户身份验证后清除
  - authorities: 权限，通常是角色


## Authentication的实现类: UsernamePasswordAuthenticationToken

构造方法: UsernamePasswordAuthenticationToken(Object principal, Object credentials)

- 参数:
  - principal: UserDetails
  - credentials: 密码

Principal和credentials用来认证

- Principal: 数据库中正确的用户信息
- credentials: 用户输入的密码

authorities用来授权

## Authentication方法

- getPrincipal(): 返回其中Principal, 通常是UserDetails
- getCredentials(): 返回其中credentials, 通常是密码
- getAuthorities(): 返回其中authorities, 通常是角色