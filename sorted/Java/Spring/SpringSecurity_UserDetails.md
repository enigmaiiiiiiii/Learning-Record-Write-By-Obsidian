# UserDetails

- 通常从**数据库**中加载用户的正确信息
- `java.util.Collection<? extends GrantedAuthority> getAuthroities()`
- `java.lang.String getPassword()`
- `java.lang.String getUsername()`
- `boolean isAccounNonExpred()`
- `boolean isAccountNonLocked()`
- `boolean isCredentialsNonExpired()`
- `boolean isEnabled()`