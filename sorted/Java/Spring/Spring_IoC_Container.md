# IoC Container

-   IoC: Inversion of Control(控制反转)

> 将对象的管理权交给Spring

-   DI: dependency injection(依赖注入)

> 为对象中的属性赋值

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

## 组件

[Spring组件](Spring_Component.md)

## 装配

[Spring自动装配](Spring_Autowired.md)