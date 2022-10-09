# 自动装配

- 属性自动装配: 使用`@Autowired`注解
- 方法参数自动装配: 不需要注解

由spring框架调用的方法: 构造方法，配置类中的@Bean注解方法

spring调用的构造方法

- 无参构造方法
- 仅有一个构造方法时
- 有多个有参数的构造方法时, 调用的是有`@Autowired`注解的构造方法

## @Autowired

- 注解属性时, 用于自动创建接口实例
- 注解构造方法时, 显式指定自动装配时使用的构造方法

注解属性时的细节

```java
@Autowired
// @Qualifier("petStore")
PropName propName;
```
- 参数:
  - required
    - true(默认值): 如果没有找到匹配的bean, 抛出异常
    - false: 如果没有找到匹配的bean, 返回null
- 对应的类的个数:
  - 1: 装配成功
  - 0: 无法装配, 抛出异常
  - 多个: 按属性名匹配, 如属性`PropName propName`
    - 使用prop_name匹配类的Bean Name
    - 在**被装配的属性**上使用`@Qualifier("name")`注解, 用name替代prop_name
    - **类**上使用`@Component("name")`指定组件注册到容器中的名称, 用name去匹配prop_name

> Bean Name: 类名首字母小写

