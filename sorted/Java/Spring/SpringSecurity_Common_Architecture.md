# SpringSecurity在Servlet中的层次结构 

![filterChain](../../../src/filterchain.png)

## 首先了解Servlet的FilterChain

从客户端发送请求开始

容器创建一个FilterChain对象, FilterChain对象中有**多个**Filter和**一个**Servlet对象

> 一个Servlet对象, 可以处理一对HttpServletRequst和HttpServletResponse对象, 但是可以有多个Filter对象

- Filter可以**阻止**下游filter或servlet, 这种情况下，filter会创建一个HttpServletResponse对象
- Filter可以**修改**下游filter或servlet使用的HttpServletRequest或HttpServletResponse对象

## DelegatingFilterProxy

- [Servlet]容器允许使用它自己的标准注册的Filter，但是不知道Spring定义的[bean](Spring_Component.md)
- Spring提供的**Filter实现**叫做DelegatingFilterProxy
  - 连接在FilterChain的filter之间
  - DelegatingFilterProxy是一个servlet Filter, 但是它会委托给Spring容器中实现**Servlet Filter的bean**来处理请求
  - 是Servlet中Spring Security支持的的起点

## FilterChainProxy

- 上面提到的实现Filter的bean叫做FilterChainProxy, 即Spring提供的bean实现
- FilterChainProxy将**Spring提供的Filter**委托给SecurityFilterChain
- FilterChainProxy可以决定用哪个SecurityFilterChain, 所以可以提供独立的Filter配置

## SecurityFilterChain

- 提供多个**Spring Security Filter**的集合
- 相比Servlet仅根据URL来匹配Filter, FilterChainProxy提供了更多的匹配方式
  - 通过RequestMatcher可以基于HttpRequest中的任何内容来调用

## SecurityFilter

- Spring Security提供的Filter
- 被插入到SecurityFilterChain中的Filter
- 了解Filter的顺序是有必要的
- 建议的顺序: 
  - [ ] ForceEagerSessionCreationFilter
  - [ ] ChannelProcessingFilter
  - [ ] WebAsyncManagerIntegrationFilter
  - [ ] SecurityContextPersistenceFilter
  - [ ] HeaderWriterFilter
  - [ ] CorsFilter
  - [ ] CsrfFilter
  - [ ] LogoutFilter
  - [ ] OAuth2AuthorizationRequestRedirectFilter
  - [ ] Saml2WebSsoAuthenticationRequestFilter
  - [ ] X509AuthenticationFilter
  - [ ] AbstractPreAuthenticatedProcessingFilter
  - [ ] CasAuthenticationFilter
  - [ ] OAuth2LoginAuthenticationFilter
  - [ ] Saml2WebSsoAuthenticationFilter
  - [ ] UsernamePasswordAuthenticationFilter
  - [ ] OpenIDAuthenticationFilter
  - [ ] DefaultLoginPageGeneratingFilter
  - [ ] DefaultLogoutPageGeneratingFilter
  - [ ] ConcurrentSessionFilter
  - [ ] DigestAuthenticationFilter
  - [ ] BearerTokenAuthenticationFilter
  - [ ] BasicAuthenticationFilter
  - [ ] RequestCacheAwareFilter
  - [ ] SecurityContextHolderAwareRequestFilter
  - [ ] JaasApiIntegrationFilter
  - [ ] RememberMeAuthenticationFilter
  - [ ] AnonymousAuthenticationFilter
  - [ ] OAuth2AuthorizationCodeGrantFilter
  - [ ] SessionManagementFilter
  - [ ] ExceptionTranslationFilter
  - [ ] FilterSecurityInterceptor
  - [ ] SwitchUserFilte

## 处理异常