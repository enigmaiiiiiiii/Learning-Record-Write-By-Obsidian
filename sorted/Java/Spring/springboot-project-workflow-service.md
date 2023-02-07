# Service

- [Business logic](../../projectlogic/projectlogic.md) layer

service
│   IDemoService.java
│
└───impl
        DemoServiceImpl.java

- 作用
  - **定义**和**实现**业务逻辑接口
  - 使用数据库接口完成业务处理
  - 处理VO, DTO对象, 完成**数据对象**到**实体对象**的转换
- 处理业务的逻辑[接口](../java-interface.md)
  - IDemoService.java: 业务逻辑接口
  - 命名格式: I+业务名+Service, 如IDemoService
- 实现业务逻辑类
  - `@Service`注解的类
  - 实现接口
  - 命名格式: 业务名 + ServiceImpl 
  - 抛出[异常](springboot-project-workflow-exception.md)

## service接口

IDemoService.java

- 处理数据库事务, 添加注解`@Transaction`
- 刚开始可以在接口声明上添加`@Transactional`注解, 之后再根据需要添加

```java
public interface IDemoService {

    @Transactional  // 事务
    public void insertId(Long id)
}
```

## 实现类

- 在子目录impl中存放业务逻辑接口实现类
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

