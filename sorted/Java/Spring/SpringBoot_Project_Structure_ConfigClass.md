# 配置类

- 配置类的package
- 类上均添加`@Configuration`, 表示为配置类

- 定义的类
  - MybatisConfiguration.java
    - 添加`@MapperScan(val)`注解, 将val指定的包下的所有接口都作为Mapper接口
  - WebMvcConfiguration.java

## MybatisConfiguration.java


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
