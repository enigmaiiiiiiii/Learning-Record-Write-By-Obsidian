# Service

service
│   IDemoService.java
│   
└───impl
        DemoServiceImpl.java

- 作用
  - 定义和实现业务逻辑接口
  - 与数据库完成交互
- 处理业务的逻辑[接口](../Java_Interface.md)
  - IDemoService.java: 业务逻辑接口
  - 命名格式: I+业务名+Service, 如IDemoService
- 实现业务逻辑类
  - `@Service`注解的类
  - 实现接口
  - 命名格式: 业务名+ServiceImpl 
  - 抛出[异常](SpringBoot_Project_Workflow_Exception.md)

IDemoService.java

```java
public interface IDemoService {
}
```

- 子目录
  - impl目录: 业务逻辑接口实现类
- 实现类的编写
  - insert
  - delete
    - 删除不存在的条目应抛出异常
  - select
  - update