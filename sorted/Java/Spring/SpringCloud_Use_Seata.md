# 使用Seata

[Seata](Seata.md)

## 添加依赖

再父项目重

```xml
<dependency>
    <groupId>io.seata</groupId>
    <artifact>seata-serializer-kryo</artifact>
    <version>1.4.2</version>
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

## 使用时注意

Seata在开始工作时,会将方法相关对象**序列化**后保存在对应数据库的undo_log表中

但是Seata序列化的方式支持很多中,常见的jackson格式序列化的情况下,不支持java对象LocalDataTime类型的序列化,序列化运行时会发送错误

![seata](seata_exception.png)

两个解决方法

1.将序列化过程中LocalDataTime类型转换为Date

2.将Seata序列化转换为kryo类型,需要在pom文件中添加依赖

```xml
<!--解决seata序列化问题-->
<dependency>
    <groupId>io.seata</groupId>
    <artifactId>seata-serializer-kryo</artifactId>
</dependency>
```

- yml文件添加kryo序列化对象的配置

```yaml
#seata服务端
seata:
  tx-service-group: group_name
  service:
    vgroup-mapping:
      group_name: default
    grouplist:
      default: seata_host:8091
  client:
    undo:
      log-serialization: kryo
```
