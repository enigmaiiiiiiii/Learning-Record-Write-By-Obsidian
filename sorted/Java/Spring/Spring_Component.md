# 组件

- `@ComponentScan`配置组件扫描的package, 多个package用逗号分隔

```java
@Configuration
@ComponentScan('org.example.packageof.component', 'org.example.packageof.othercomponent')
```

## 被Spring框架创建组件

- `@Component`: 自定义组件
- `@Bean`: 配置类中注册非自定义组件

`@Component`注解类用来标记Spring组件

```java 
@Component
public class Component {
    // ...
}
```

`@Bean`注解在方法上, 表示该方法返回的对象会注册为Spring应用上下文中的bean

```java
@Configuration
public class BeanFactory {

    @Bean
    public LocalDateTime now() {
        return LocalDateTime.now();
    }

    @Bean
    public MyBean createBean() {
        return new MyBean();  // 可用于任何类
    }
}
```

## 对象的作用域

- spring管理的对象默认是单例的
- spring支持的作用域: singleton, prototype, request, session, global session

