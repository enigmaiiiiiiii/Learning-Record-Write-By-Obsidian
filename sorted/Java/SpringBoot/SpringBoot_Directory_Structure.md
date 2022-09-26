# 目录结构

## config

## mapper

## pojo目录

- 用于存放实体类 
- 子目录
  - entity目录
    - DemoEntity.java: 实体类
  - VO目录
    - DemoEntityStandardVO.java: 查询详情
    - DemoEntityListItemVO.java: 查询列表

## controller

- 处理请求, 返回响应
- 通过@RequestMapping(Value)注解将方法映射为请求
  - value: 对应url请求的资源名称

## service目录

- 此目录下包含处理业务逻辑的[接口](../Java_Interface.md)
  - DemoService.java: 业务逻辑接口
- 接口命名规范I+业务名+Service

IDemoService.java

```java
public interface IDemoService {
}
```

- 子目录
  - impl目录: 业务逻辑接口实现类

## resource
