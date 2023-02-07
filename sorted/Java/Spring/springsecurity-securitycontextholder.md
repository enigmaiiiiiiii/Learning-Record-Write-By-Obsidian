# SecurityContextHolder

## 设置SecurityContextHolder

- 创建[Authentication](springsecurity-authentication-interface.md)对象, 通常是UsernamePasswordAuthenticationToken(UserDetails, password, authorities)
-

```java
// 创建空的SecurityContext
SecurityContext context = SecurityContextHolder.createEmptyContext();
// 创建认证信息authentication实例
Authentication authentication =
    new TestingAuthenticationToken("username", "password", "ROLE_USER");
context.setAuthentication(authentication);

// 设置SecurityContext
SecurityContextHolder.setContext(context);
```


## 获取SecurityContextHolder

- SecurityContextHolder用ThreadLocal保存SecurityContext

```java
SecurityContext context = SecurityContextHolder.getContext();
Authentication authentication = context.getAuthentication();
String username = authentication.getName();
Object principal = authentication.getPrincipal();
Collection<? extends GrantedAuthority> authorities = authentication.getAuthorities();
```

