# IoC Container

## IoC: Inversion of Control

- give object control right to Spring
- object created by Spring, like [controller], [entity class]
- Definition of Component: an object that is managed by Spring

[Spring Component](spring-component.md)

## DI: Dependency Injection

> [DI explaination](design-pattern-dependency-injection.md)

related annotations

- [`@Autowired`](spring-autowired.md) annotate on [consumer](design-pattern-dependency-injection.md#consumer) class property
- [`@Qualifier`]()
- [`@Value`]
- [`@Resource`]
- [`@Component`]
- [`@Service`, `@Repository`, `@Controller`]

## Configuration Metadata

```html
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.springframework.org/schema/beans
        https://www.springframework.org/schema/beans/spring-beans.xsd">
        <bean id="petStore" class="org.springframework.samples.jpetstore.services.PetStoreServiceImpl">
            <property name="accountDao" ref="accountDao"/>
            <property name="itemDao" ref="itemDao"/>
        <!-- additional collaborators and configuration for this bean go here -->
        </bean>
        <!-- more bean definitions go here -->
</beans>
```

- id: bean 的唯一标识符
- class: bean 的全限定类名
