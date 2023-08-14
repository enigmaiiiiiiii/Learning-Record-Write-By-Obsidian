# Spring - Autowired

- [Introduction](#introduction)
- [take a look](#take-a-look)
- [`@Autowired`](#autowired)
- [`@Resource`](#resource)

## Introduction

- property auto wiring: use `@Autowired` annotation
- method's parameter auto wiring: no annotation needed

method called by spring framework

- constructor 
- `@Bean` annotated method in configuration class

When construct object, Which Constructor will be called by spring framework?

- parameterless constructor
- only one constructor
- when there are multiple constructors with parameters, the constructor with `@Autowired` annotation will be called

## Take A Look

use [`@autowired`] to wire a bean to a property

```java
public class FooService {

  @Autowired
  @Qualifier("fooFormatter")
  private Formatter formatter;
}
```

two bean with implement same interface

```java
@Component
@Qualifier("fooFormatter")
public class FooFormatter implements Formatter {
    //...
}

@Component
@Qualifier("barFormatter")
public class BarFormatter implements Formatter {
    //...
}
```

通常属性使用超类或接口类型, 因此可能有多个对应类, 所以有如下匹配规则

- 1: 装配成功
- 0: 无法装配, 抛出异常
- 多个: 按属性名匹配, 如属性`PropName propName`
  - 使用prop_name匹配类的Bean Name
  - 在**被装配的属性**上使用`@Qualifier("name")`注解, 用name替代propName
  - **类**上使用`@Component("name")`指定组件注册到容器中的名称, 用name去匹配propName

> Bean Name: 类名首字母小写

## `@Autowired`

- 注解属性时, 用于自动创建接口实例
- 注解构造方法时, 显式指定自动装配时使用的构造方法

参数

- required
  - true(默认值): 如果没有找到匹配的bean, 抛出异常
  - false: 如果没有找到匹配的bean, 返回null

## `@Qualifier`

annotation a property and bean class to specify which

`@Qualifier('foo')`

- use on property: match a bean with name foo
- use on bean class: this bean will be registered with name foo
- use on [component](spring-component.md#component-created-by-spring): this component will be registered with name foo

## `@Resource`

- an Annotation in java EE API
