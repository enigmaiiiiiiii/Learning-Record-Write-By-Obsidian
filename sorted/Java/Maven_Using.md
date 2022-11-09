# 使用Maven

## 创建一个项目

```bash
mvn archetype:generate -DgroupId=com.mycompany.app
                       -DartifactId=my-app
                       -DarchetypeArtifactId=maven-archetype
                       -quickstart
                       -DarchetypeVersion=1.4 -DinteractiveMode=false
```

标准项目结构

```
my-app
|-- pom.xml
`-- src
    |-- main
    |   `-- java
    |       `-- com
    |           `-- mycompany
    |               `-- app
    |                   `-- App.java
    `-- test
        `-- java
            `-- com
                `-- mycompany
                    `-- app
                        `-- AppTest.java
```

使用vscode创建

crtl+shift+p -> maven: generate from archetype

## POM配置文件

[pom.xml](Maven_Pom_Xml.md)

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

## 打包maven项目: Package Maven project 

create JAR 创建jar包

```shell
mvn package
```

## 添加到maven仓库

install in locally 安装到本地仓库

- 安装在`${user.home}/.m2/repository`目录下

```shell
mvn install
```