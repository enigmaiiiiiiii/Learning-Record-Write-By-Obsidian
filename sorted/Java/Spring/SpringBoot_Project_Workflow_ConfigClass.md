# 配置类

- 配置类的package
- 类上均添加`@Configuration`, 表示为配置类
- 定义的类
  - MybatisConfiguration.java
    - 添加`@MapperScan(val)`注解, 将val指定的包下的所有接口都作为Mapper接口
  - WebMvcConfiguration.java

## MybatisConfiguration.java

```java
@Configuration
@MapperScan("com.example.demo.mapper")  // 指定搜索mapper接口所在的包
public class MybatisConfiguration {
    public MybatisConfiguration() {
    }
}
```

## WebMvcConfiguration.java

- 响应[跨域请求](Http_CORS.md)
- override addCorsMappings方法

```java
@Configuration
public class WebMvcConfiguration implements WebMvcConfigurer {

    public WebMvcConfiguration() {
    }

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOriginPatterns("*")
                .allowedMethods("*")
                .allowedHeaders("*")
                .allowCredentials(true)
                .maxAge(3600);
    }

}
```

[可以直接应用在启动类](SpringBoot_CORS_On_Application.md)

## SecurityConfiguration.java

- 继承`WebSecurityConfigurerAdapter`
- 初始化Spring组件
  - [AuthenticationManager](): 认证管理器
  - [PasswordEncoder](): 密码编码器
- 重写`configure(HttpSecurity http)`

```java
@Configuration
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

    @Bean
    public PasswordEncoder passwordEncoder() {
        // return NoOpPasswordEncoder.getInstance();
        return new BCryptPasswordEncoder();
    }

    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        // 配置HttpSecurity对象
    }

    @Autowired
    JwtAuthorizationFilter jwtAuthorizationFilter;

}
```

重写Configure(HttpSecurity http)

- 授权可访问的url
- 允许[预检请求](../../Network/Http_CORS_Preflighted_Requests.md)
- 关闭[csrf](Web_CSRF.md)
- 添加过滤器

```java
protected void configure(HttpSecurity http) throws Exception {
    String[] urls = {
        // 授权可访问的url
    }

    http.authrizeRequests()
        .antMatchers(urls).permitAll()
        // 允许预检请求
        .antMatchers(HttpMethod.OPTIONS, "/**").permitAll()
        .anyRequest().authenticated();


    // 关闭csrf
    http.csrf().disable();  

    // 添加token过滤器
    http.addFilterBefore(jwtAuthorizationFilter, UsernamePasswordAuthenticationFilter.class);
}
```

## RedisConfiguration.java

## ScheduleConfiguration.java

- 使用`@EnableScheduling`注解配置类来启用定时任务 

> 不需要其它添加其它方法

```java
@Configuration
@EnableScheduling
public class ScheduleConfiguration {

    public ScheduleConfiguration() {
        // ScheduleConfiguration loaded message
    }

```

