# Interface Authentication

- 两个主要目的
  - AuthenticationManager的输入
  - 代表当前已验证用户身份, 保存在SecurityContext中
- Authentication包括
  - Principal: 主体，通常是[UserDetails]
  - credentials: 凭据，通常是密码，用户身份验证后清除
  - authorities: 权限，通常是角色

## UsernamePasswordAuthenticationToken
  

