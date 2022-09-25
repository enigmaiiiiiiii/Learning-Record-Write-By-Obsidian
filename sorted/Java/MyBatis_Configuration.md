# mybatis

## xml配置文件

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE configuration Public 
    "-//mybatis.org//DTD Config 3.0//EN" 
    "https://mybatis.org/dtd/mybatis-3-config.dtd">
<configuration>
    <environments default="development">
        <!-- 配置信息 -->
    </environments>
</configuration>
```

## \<properties>

- 配置方式
  - xml配置文件
  - config.properties文件
  - SqlSessionFactoryBuilder.build()方法

xml配置文件

```xml
<properties>
    <property name="username" value="dev_user"/>
    <property name="password" value="F2Fa3!33TYyg">
</properties>
```

config.properties文件

```properties
```

SqlSessionFactoryBuilder.build()方法

```java
SqlSessionFactory builder = new SqlSessionFactoryBuilder().build(reader, props);
SqlSessionFactory builder = new SqlSessionFactoryBuilder().build(reader, environment, props);
```

