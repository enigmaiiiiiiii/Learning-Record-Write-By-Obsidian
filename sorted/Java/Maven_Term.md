# 术语

## plugin

- maven实际上是一组maven plugin的核心框架
- 换句话说, plugin执行大部分的实际操作

## Mojo

- mojo是maven中的目标, plugin是由任意数量的mojo组成的
- 可以定义为带注释的java类或BeanShell脚本
- mojo指定了关于目标的元数据, 绑定的生命周期, 需要的参数

# 原型(archetype)

Maven QuickStart Archetype

```shell
project
│  pom.xml
│
├─src
│  ├─main
│  │  └─java
│  │      └─com
│  │          └─example
│  │                  App.java
│  │
│  └─test
│      └─java
│          └─com
│              └─example
│                      AppTest.java
│
└─target
    ├─classes
    │  └─com
    │      └─example
    │              App.class
    │
    └─test-classes
        └─com
            └─example
                    AppTest.class
```


## POM

- 项目对象模型(Project Object Model), 包含一个maven项目的所有信息

## 坐标(coordinate)

- groupId, artifactId, version共同组成maven项目的坐标

groupId: 

- 在organization 或 organization 中通常是唯一的

> `org.codehaus.mojo` group位于目录$M2_REPO/org/codehaus/mojo
> $M2_REPO: 表示maven本地仓库

artifactId: 

- 通常是为人所知的项目名称
- 和groupId共同定义项目的活动区域

> my-project在目录 $M2_REPO/org/codehaus/mojo/my-project

version: 版本

## Repository

[ ] TODO

## 本地仓库(Local Repository)

- groupId: org.sample
- artifactId: BirdBoot
- version: 1.0, 1.1

对于以上pom信息，本地仓库目录结构

```
c:\users\administrator\.m2\repository\org\sample
└─BirdBoot
    │  maven-metadata-local.xml
    │
    ├─1.0
    │      BirdBoot-1.0-sources.jar.lastUpdated
    │      BirdBoot-1.0.jar
    │      BirdBoot-1.0.pom
    │      _remote.repositories
    │
    └─1.1
            BirdBoot-1.1.jar
            BirdBoot-1.1.pom
            _remote.repositories
```

## 目录布局

src: 存放源文件

- src/main/java
- src/main/resources
- src/main/filters
- src/main/webapp
- src/test/java
- src/text/resources
- src/text/filters
- src/it
- src/assembly
- src/site

说明文本

LICENSE.txt
NOTICE.txt
README.txt

target: 存放构建项目的输出目录

## 依赖机制

[Dependency](Maven_Term_Dependency.md)

