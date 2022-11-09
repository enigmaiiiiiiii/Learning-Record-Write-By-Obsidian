# 组织多模块项目

## 创建多模块项目

1. 生成Parent POM

```bash
mvn archetype:generate -DgroupId=com.baeldung -DartifactId=parent-project
```

打开pom.xml, 添加如下内容

```xml
<packaging>pom</packaging>
```

2. 生成子模块

```bash
cd parent-project
mvn archetype:generate -DgroupId=com.baeldung -DartifactId=core
mvn archetype:generate -DgroupId=com.baeldung -DartifactId=service
mvn archetype:generate -DgroupId=com.baeldung -DartifactId=webapp
```

3. 在parent pom.xml 添加modules部分

```xml
<modules>
    <module>core</module>
    <module>service</module>
    <module>webapp</module>
</modules>
```

4. 在子模块的pom.xml中添加parent部分

```xml
<parent>
    <artifactId>parent-project</artifactId>
    <groupId>com.example</groupId>
    <version>1.0-SNAPSHOT</version>
</parent>
```

## 构建

```bash
mvn package
```

## 在父项目中添加依赖管理

- 用于统一依赖

pom.xml

```xml
<dependencyManagement>
    <dependencies>
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-core</artifactId>
            <version>5.3.16</version>
        </dependency>
    </dependencies>
</dependencyManagement>
```

## `<relativepath>`的作用

```
super
  │
  ├─module1
  │
  └─module2
```

super pom.xml

```xml
<groupId>com.baeldung.maven-parent-pom-resolution</groupId>
<artifactId>aggregator</artifactId>
<version>1.0.0-SNAPSHOT</version>
```

submodule pom.xml

```xml
<artifactId>module1</artifactId>
<parent>
    <groupId>com.baeldung.maven-parent-pom-resolution</groupId>
    <artifactId>aggregator</artifactId>
    <version>1.0.0-SNAPSHOT</version>
</parent>
```

没有<relativepath>的子pom.xml

- 不需要在仓库中安装super POM
- 甚至不需要super POM中声明module1

***

```xml
<artifactId>module2</artifactId>
<parent>
    <groupId>com.baeldung.maven-parent-pom-resolution</groupId>
    <artifactId>module1</artifactId>
    <version>1.0.0-SNAPSHOT</version>
    <relativePath>../module1/pom.xml</relativePath>
</parent>
```

这样是将设置modoel2的parent为module1

***

跳过在目录搜索, 搜索maven仓库

```xml
<parent>
    <groupId>com.baeldung</groupId>
    <artifactId>external-project</artifactId>
    <version>1.0.0-SNAPSHOT</version>
    <relativePath/>
</parent>
```


