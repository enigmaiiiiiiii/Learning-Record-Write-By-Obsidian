# Filter

- 添加自定义Spring Security Filter

## JwtAuthenticationFilter 

- 用于验证[token](../../Network/Http_Token.md#JWT)
- 解析客户端请求报文中的携带的Token, 通常是在请求头中的Authorization字段中
- 抛出jwt相关异常
  - SignatureException
  - MalFormedJwtException
  - ExpiredJwtException
- 设置SecurityContextHolder
  - 生成认证Token
    - 认证对象 

`JWTAuthenticationFilter.java` looks like

```java
@Component
@Slf4j
public class JwtAuthorizationFilter extends OncePreRequestFilter {

    protected void doFileterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletExceptionl, IOException {

    // 清楚SecurityContextHolder中的原有认证信息
    SecurityContextHolder.clearContext();

    // 从request中获取token
    String token = request.getHeader("Authorization");

    // 如果token为空, 则不进行认证

    // 获取claims 并处理exception

    // 接卸jwt中的claims中的字段
}
```