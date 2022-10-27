# 微服务项目

## 父项目配置

```xml
<parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>2.5.9</version>
    <relativePath/>
</parent>

<!-- 项目名称 -->
<groupId>com.example</groupId>
<artifactId>parent_name</artifactId>
<version>0.0.1-SNAPSHOT</version>
<name>parent_name</name>

<!-- 表示当前项目是父项目 -->
<packaging>pom</packaging>

<!-- 包含的模块 -->
<modules>
    <module>module_name</module>
    <module>module_name</module>
    <module>module_name</module>
</modules>

<!-- 自定义变量 -->
<properties>
    <java.version>1.8</java.version>
    <mybatis.version>2.2.2</mybatis.version>
</properties>

<!-- 管理依赖，并不是添加到子项目的依赖 -->
<dependencyManagement>
    <dependencies>
        <dependency>
        </dependency>
    <dependencies>
</dependencyManagement>
```

## 子项目配置

```xml
<parent>
    <groupId>com.example</groupId>
    <artifactId>parent_name</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <relativePath/>
</parent>

<groupId>com.example</groupId>
<artifactId>module_name</artifactId>
<version>0.0.1-SNAPSHOT</version>
<name>module_name</name>
```
