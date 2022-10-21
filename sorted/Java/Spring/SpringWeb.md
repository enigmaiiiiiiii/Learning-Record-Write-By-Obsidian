# Spring Web

## Servlet

HttpSession

- `void setAttribute(String name, Object value)`
  - 为session对象添加name属性，值为value
- `String getAttribute(String name)`
  - 获取session对象的name属性的值

## Filter

OnePerRequestFilter

- 保证每次请求被执行一次分派的基类
- doFilterInternal: 保证每次请求只会被执行一次Filter

## FilterChain

- 只有一个接口方法: `doFilter(ServletRequest request, ServletResponse response)`
  - 用于执行FilterChain中的下一个过滤器, 或者目标资源
