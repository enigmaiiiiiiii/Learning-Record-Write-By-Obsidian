# package of 配置类

- 配置类的package
- 类上均添加`@Configuration`, 表示为配置类
- 定义的类
  - MybatisConfiguration.java
    - 添加`@MapperScan(val)`注解, 将val指定的包下的所有接口都作为Mapper接口
  - WebMvcConfiguration.java

## MybatisConfiguration.java

- 设置Mybatis接口所在的package

```java
@Configuration
@MapperScan("com.example.demo.mapper")  // 指定搜索mapper接口所在的包
public class MybatisConfiguration {
    public MybatisConfiguration() {
    }
}
```

## WebMvcConfiguration.java

- 响应[跨域请求](http-cors.md)
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

[可以直接应用在启动类](springboot-cors-on-application.md)

## SecurityConfiguration.java

- 继承`WebSecurityConfigurerAdapter`
- 初始化Spring组件
  - [AuthenticationManager](springsecurity-authenticationmanager-interface.md): 认证管理器
  - [PasswordEncoder](springsecurity-passwordencoder.md): 密码编码器
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
- 允许[预检请求](../../network/http-cors-preflighted-requests.md)
- 关闭[csrf](web-csrf.md)
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

    // 添加token过滤器, 在UsernamePasswordAuthenticationFilter之前
    http.addFilterBefore(jwtAuthorizationFilter, UsernamePasswordAuthenticationFilter.class);

    // 允许跨域
    http.cors();
}
```

## RedisConfiguration.java

## ScheduleConfiguration.java

- 使用`@EnableScheduling`注解配置类来**启用定时任务**

> 不需要其它添加其它方法

```java
@Configuration
@EnableScheduling
public class ScheduleConfiguration {

    public ScheduleConfiguration() {
        // ScheduleConfiguration loaded message
    }
```

## DataSourceConfiguration.java

配置类的注解

```java
@MapperScan(
    basePackages = "com.example.demo.mapper",
    sqlSessionTemplateRef = "db1sqlSessionTemplate"
    )
```

- `@MapperScan`: 指定mapper接口所在的包
- `sqlSessionTemplateRef`: 指定SqlSessionTemplate的bean名称

类方法的注解

- 使用`@ConfigurationProperties(prefix = "spring.datasource.first")`注解来读取配置文件中的配置
- 使用`@Bean`注解来创建DataSource实例

> SqlSessionTemplate实例由[Mapper](springboot-project-workflow-mapper.md)接口装配得到


```java
@Configuration
@MapperScan(basePackages = "com.example.project_name.business.mapper.first", sqlSessionTemplateRef = "FirstSqlSessionTemplate")
public class FirstDataSourceConfiguration {
    /**
     * 生成数据源.  @Primary 注解声明为默认数据源
     */
    @Bean(name = "firstDataSource")
    @ConfigurationProperties(prefix = "spring.datasource.first")
    @Primary
    public DataSource testDataSource() {
        return DataSourceBuilder.create().build();
    }

    /**
     * 创建 SqlSessionFactory
     */
    @Bean(name = "firstSqlSessionFactory")
    @Primary
    public SqlSessionFactory testSqlSessionFactory(@Qualifier("firstDataSource") DataSource dataSource) throws Exception {
        SqlSessionFactoryBean bean = new SqlSessionFactoryBean();
        bean.setDataSource(dataSource);
        // 设置mybatis的mapper文件路径文件
        bean.setMapperLocations(new PathMatchingResourcePatternResolver().getResources
                ("classpath:mapper/first/*.xml"));
        return bean.getObject();
    }

    /**
     * 配置事务管理
     */
    @Bean(name = "firstTransactionManager")
    @Primary
    public DataSourceTransactionManager testTransactionManager(@Qualifier("firstDataSource") DataSource dataSource) {
        return new DataSourceTransactionManager(dataSource);
    }

    @Bean(name = "firstSqlSessionTemplate")
    @Primary
    public SqlSessionTemplate testSqlSessionTemplate(@Qualifier("firstSqlSessionFactory") SqlSessionFactory sqlSessionFactory) throws Exception {
        return new SqlSessionTemplate(sqlSessionFactory);
    }
}
```

