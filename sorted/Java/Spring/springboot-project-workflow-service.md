# Spring Workflow - Service Layer

## What Service Layer Do

- [Business logic]() layer

```
service
├───IDemoService.java
└───impl
    └───DemoServiceImpl.java
```

- Functions
  - implement business logic interface
  - call [repository layer](springboot-project-workflow-mapper.md) interface to access database to implement business logic
  - handle VO, DTO object, convert **data object** to **entity object**
- handle business logic interface
  - `IDemoService.java`: File of business logic interface
  - name convention: I + business name + Service, like `IDemoService`
- implement business logic class
  - class with annotation `@Service`
  - Implement above business logic interface
  - name convention: business name + ServiceImpl, like `DemoServiceImpl`
  - throw [exception](springboot-project-workflow-exception.md)

## Service Interface

`IDemoService`.java

When handle transaction

- use annotation `@Transaction`

```java
public interface IDemoService {

    @Transactional  // 事务
    public void insertId(Long id)
}
```

## Service Implementation

- in subdirectory `impl`, store implementation of business logic interface
- 添加`@Service`注解, 使其成为Spring容器管理的组件
- 实现类的编写细节
  - 执行delete, update之前, 需要先执行select, 确保数据存在, 不存在时抛出异常
  - sql语句执行失败时抛出服务器异常, 因为数据库服务可能的运行异常(内存已满, 网络中断等)
  - 用户调用的方法, 参数尽可能少
  - 重复代码封装成private方法

DemoServiceImpl.java

```java
@Service  // 用于自动装配
public class DemoServiceImpl implements IDemoService {

    public void insert() {
        // method body
    }
}
```

