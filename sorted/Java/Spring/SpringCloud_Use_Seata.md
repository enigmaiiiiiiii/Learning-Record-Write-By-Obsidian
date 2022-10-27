# 使用Seata

[Seata](Seata.md)

## 添加依赖

```xml
<dependency>
    <groupId>io.seata</groupId>
    <artifact>
</dependency>

```

## SpringBoot项目添加配置

```yml
seata:
  # 一般是以根项目为单位的
  tx-service-group: root_group  # 定义事务的分组名称为root_group
  service:
    vgroup-mapping:
      root_group: default     # 事务分组的配置,default会默认配置Seata
    grouplist:
      default: localhost:8091   # 配置Seata服务器的地址和端口号
```

## 添加注解

- `@GlobalTransactional`: 用于标注在业务方法上, 表示当前方法是一个全局事务的方法
