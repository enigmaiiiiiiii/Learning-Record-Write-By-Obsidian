# 认证

- 基于表单的认证
- 基于Token实现登录持久化

## 流程

- 三种认证: Basic, Form, Digest

[基础认证](SpringSecurity_Basic_Authentication.md)

[基于表单的认证](SpringSecurity_Form_Authentication.md)

[基于摘要]

## 认证上下文

![SpringSecurity_Authentication](/src/securitycontextholder.png)

- [SecurityContextHolder](SpringSecurity_SecurityContextHolder.md): 保存当前用户的认证信息
  - [SecurityContext](SpringSecurity_SecurityContext_Interface.md): 从SecurityContextHolder中获取当前用户的认证信息
    - [Authentication](SpringSecurity_Authentication_Interface.md): 输入到AuthenticationManager中的认证信息
      - Principal: 主体，通常是[UserDetails]
      - Credentials: 凭据，通常是密码，用户身份验证后清除
      - [GrantedAuthority](SpringSecurity_GrandAuthority_Interface.md): 权限，通常是角色

## 认证管理器

[AuthenticationManager接口](SpringSecurity_AuthenticationManager_Interface.md): 定义了[Spring Security Filter](SpringSecurity_Common_Architecture.md)对Authentication的动作

[AuthenticationManager实现: ProviderManager](SpringSecurity_ProviderManager.md): 最常见的AuthenticationManager实现

## 认证信息

- [UserDetails](SpringSecurity_UserDetailsService.md): 被认证的部分
