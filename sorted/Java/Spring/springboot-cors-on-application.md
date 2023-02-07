# 可以应用在启动类上

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