# SpringBoot中使用Mybatis

## 1. 添加依赖

```xml
<dependency>
    <groupId>org.mybatis.spring.boot</groupId>
    <artifactId>mybatis-spring-boot-starter</artifactId>
    <version>2.2.2</version>
</dependency>
```

## 2. 配置

- 在`application.yml`中配置
  - mapper.xml格式sql语句映射文件路径
  - 在springboot中使用mybatis本身的配置文件: `config-location: classpath:mybatis-config.xml`

```yml
mybatis:
  mapper-locations: classpath:mapper/*.xml
  # mybatis配置文件路径, 通过mybatis-config.xml配置mybatis
  config-location: classpath:mybatis-config.xml
  configuration:
    cache-enabled: true # 不启用Mybatis
    map-underscore-to-camel-case: true  # 支持驼峰命名
    log-impl: org.apache.ibatis.logging.stdout.StdOutImpl # 日志输出到控制台
```

- 添加配置类, 避免添加@Mapper注解
- @Configuration: 标记为配置类
- @MapperScan(String[] packagesName) 
  - 指定包内所有类为Mapper接口, 相当于所有指定包中的类都添加了@Mapper注解

```java
@Configuration
@MapperScan("com.example.demo.mapper")
public class MyBatisConfig {
    public MyBatisConfig() {
    }
}
```

## 3. 添加实体类

- 符合pojo规范java类作为数据容器
- 在pom.xml中添加Lombok依赖

```xml
<dependency>
    <groupId>org.projectlombok</groupId>
    <artifactId>lombok</artifactId>
    <version>1.18.20</version>
    <scope>provided</scope>
</dependency>
```

- 使用`@Data`注解, 自动生成方法

> 使用lombok注解在编译期完成自动添加getter/setter/equals/hashCode/toString方法

```java
@Data
public class Sample {
    private int id;
    private String name;
    private String description;
}
```

## 4. 添加Mapper接口

```java
public interface SampleMapper {
    int selectById(int id);
    int insert(Sample sample);
}
```

## 5. 添加SQL语句映射文件

- namespace: 取值为Mapper接口的完全限定名, 在接口名唯一的情况可以使用接口名
- id: 接口中的对应方法名
- resultType: 返回类型, 可以是实体类的完全限定名, 也可以是基本类型
- `<select>`: 内容为查询语句
  - #{id}: 对应参数, 如methodName(int id)

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD mapper 3.0//EN"
            "http://mybatis.org/dtd/mybatis-3-mapper.dtd">

<mapper namespace="com.example.csmall.product.mapper.AlbumMapper">
    <select id="methodName" resultType="Sample">
        select * from table_name where id = #{id}
    </select>
</mapper>
```

## 6. Autowired装配mapper接口为实例进行数据库编程

```java
@Autowired
SampleMapper mapper;
mapper.selectById(1);
```

## 7. 使用pagehelp插件

1. pom.xml中添加依赖
2. 在application.yml中配置mybatis-config.xml文件路径

```yml
mybatis:
  configuration:
    map-underscore-to-camel-case: true
    log-impl: org.apache.ibatis.logging.stdout.StdOutImpl
    plugins:
      - com.example.demo.plugin.MyPlugin
```

3. 在mybatis-config.xml中添加xml拦截器

[Mybatis中使用PageHelper插件](../Mybatis_PageHelper.md#配置xml拦截器)

