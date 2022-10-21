# IoC Container

## IoC: Inversion of Control(控制反转)

- 将对象的管理权交给Spring
- 对象由Spring创建, 如controller, 实体类, 
- 组件定义为: 由Spring管理的对象

[Spring组件](Spring_Component.md)

## DI: dependency injection(依赖注入)

- 为对象中的属性赋值
- `@Autowired`: 完成自动注入

[Spring自动装配](Spring_Autowired.md)

## configuration metadata(配置化的元数据)

```xml
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
