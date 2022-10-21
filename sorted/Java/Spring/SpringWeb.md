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
- doFilterInternal