# 认证

- 执行用户输入和数据库中的密码进行比对的关键结构是[Authentication](springsecurity-authentication-interface.md)的实现类

## 认证上下文结构

![SpringSecurity_Authentication](securitycontextholder.png)

- [SecurityContextHolder](springsecurity-securitycontextholder.md): 保存当前用户的认证信息
  - [SecurityContext](springsecurity-securitycontext-interface.md): 从SecurityContextHolder中获取的, 包含当前用户的认证信息
    - [Authentication](springsecurity-authentication-interface.md): 
      - 可以是
        - 输入到AuthenticationManager中的认证信息
        - SecurityContext中保存的当前用户信息
      - 属性
        - Principal(主体): 正确的用户信息, 由[UserDetailsService](springsecurity-userdetailsservice-interface.md)调用loadByUsername从**数据库**等保存用户信息的地方加载加载, 通常是[UserDetails](springsecurity-userdetails.md)
        - Credentials(凭据): 通常是密码，用户身份验证后清除
        - [GrantedAuthority](springsecurity-grandauthority-interface.md)(权限): 通常是角色


## 认证管理器

[AuthenticationManager接口](springsecurity-authenticationmanager-interface.md): 定义了[Spring Security Filter](springsecurity-common-architecture.md)对Authentication的动作

- [AuthenticationManager实现: ProviderManager](springsecurity-providermanager.md): 最常见的AuthenticationManager实现

## 认证信息

- [UserDetailsService](springsecurity-userdetailsservice-interface.md)
- [UserDetails](springsecurity-userdetails.md): 对比部分, 用户输入信息应此对象保存的用户信息对比

## 流程

- 三种认证: Basic, Form, Digest

[基础认证](springsecurity-basic-authentication.md)

[基于表单的认证](springsecurity-form-authentication.md)

[基于摘要]