# UserDetails

- 通常是: 从**数据库**中加载用户的正确信息
- 用于在[UserDetailsService](SpringSecurity_UserDetailsService_Interface.md)中完成用户身份验证

- `java.util.Collection<? extends GrantedAuthority> getAuthroities()`
- `java.lang.String getPassword()`
- `java.lang.String getUsername()`
- `boolean isAccounNonExpred()`
- `boolean isAccountNonLocked()`
- `boolean isCredentialsNonExpired()`
- `boolean isEnabled()`