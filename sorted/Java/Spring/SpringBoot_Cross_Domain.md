# 响应跨域请求

[跨域请求](Http_CORS.md)

- 启动类实现WebMvcConfigurer接口
- override addCorsMappings方法

```java
public class MyApplication extends SpringBootServletInitializer implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowCredentials(true)
                .allowedHeaders("*")
                .allowedMethods("*")
                .allowedOriginPatterns("*")
                .maxAge(3600);
    }
}
```