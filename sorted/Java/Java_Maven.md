# Maven

[术语概念](Maven_Term.md)

[配置Maven](Maven_Configuration.md)

## 编译Maven

编译应用程序

> 在pom.xml所在的目录下，执行命令

```shell
maven compile
```

编译test

```shell
mvn test
```

create JAR

```shell
mvn package
```

install in locally

- 安装在`${user.home}/.m2/repository`目录下

```shell
mvn install
```
