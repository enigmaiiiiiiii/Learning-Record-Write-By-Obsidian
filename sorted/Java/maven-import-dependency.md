# Maven依赖

## groupId, artifactId, version

## scope

`<scope>compile</scope>`: default scope, 类路径可用, 会传播到其它依赖

- 可通过import导入

`<scope>provided</scope>`: 运行时依赖

- web application 部署在container中, container本身提供依赖和相关lib

```xml
<dependency>
    <groupId>javax.servlet</groupId>
    <artifactId>javax.servlet-api</artifactId>
    <version>4.0.1</version>
    <scope>provided<scope>
</dependency>
```

`<scope>runtime</scope>`: 运行时依赖, 不会出现在编译后的class文件中

- 在完成项目代码时并不需要的依赖

```xml
<dependency>
    <groupId>mysql<groudId>
    <artifactId>mysql-connector-java</artifactId>
    <version>8.0.28</version>
    <scope>runtime</scope>
</dependency>
```

`<scope>test</scope>`: 测试时依赖

`<scope>system</scope>`:

- 类似provided, 但是需要显式指定jar文件的位置

```xml
<dependency>
    <groupId>com.baeldung</groupId>
    <artifactId>custom-dependency</artifactId>
    <version>1.3.2</version>
    <scope>system</scope>
    <systemPath>${project.basedir}/libs/custom-dependency-1.3.2.jar</systemPath>
</dependency>
```

import

- important dependency
- will replaced with all effective dependencies
