# UserDetailsService

- **加载用户数据的核心接口**
- 接口中的方法: **UserDetail loadUserByUsername(String username)**
- 由DaoAuthenticationProvider使用

## loadUserByUsername(String username)

- 接口中唯一的方法, 是一个只读方法
- 返回带有principal的[UserDetails](SpringSecurity_UserDetails.md)对象

实现思路

- 通过Username设置[UserDetails]

