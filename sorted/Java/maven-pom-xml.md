# pom.xml

- [Introduction](#introduction)
- [properties](#properties)
- [dependencies元素](#dependencies元素)
- [version元素](#version元素)
- [build element](#build-element)
  - [subelements of build](#subelements-of-build)
- [packaging元素](#packaging元素)
- [dependencyManagement元素](#dependencymanagement元素)

## Introduction

- Project Object Model: 项目对象模型
- 代表了一个maven项目, 包含了一个maven项目的所有信息

元素列表

- project: Maven项目的顶级元素
- modelVersion
- groupId
- artifactId
- version
- name
- url
- [properties](#properties)
- dependencies: dependency元素列表是该元素的子元素
- [build](#build-element)

## properties

- 用于定义项目的属性

自定义属性名称

- `<prop.name>value</prop.name>`, use as `${prop.name}`

引用属性值: `${prop.name}`

- `${env.x}`: shell environment variable
- `${project.x}`: project property

> ${project.version} refers to `<project><version>1.0</version></project>`

- `${settings.x}`: settings property
- `${java.x}`: java property via `java.lang.System.getProperties()`


`project.x`: prefix with `project.`

- 用于指定项目属性
-

`val`: 指定变量

## dependencies元素

指定dependency的版本

- soft
  - `<version>1.0</version>`: 依赖关系树中没有其他版本，则使用1.0版本
- hard
  - `<version>[1.0]</version>`: Use 1.0 and Only 1.0
  - `<version>(,1.0]</version>`: <=1.0
  - `<version>[1.2, 1.3]</version>`: between 1.2 and 1.3
  - `<version>(,1.0], [1.2,)</version>`: <=1.0 or >=1.2

Exclusion元素

- 不要包含的传递依赖项

dependency

- groupId
- artifactId
- version
- scope
  - compile: default
  - provided
  - test
  - system

## version元素

- snapshot: 表示代码为最新开发分支版本, 不保证stable和unchanging

## build element

[Build Element](maven-pom-xml-build-element.md)

## packaging元素

- 指定打包方式
- `<packaging>pom</packaging>`: 代表一个父项目, 不能被打包
- `<packaging>jar</packaging>`: 代表一个jar包
- `<packaging>war</packaging>`: 代表一个war包
- `<packaging>plugin</packaging>`: 代表一个maven插件

## dependencyManagement元素

- 管理依赖, 并不引入依赖
- 用于父项目, 用于子项目的依赖管理

```xml
<dependencyManagement>
  <dependencies>
    <dependency>
      <groupId>org.springframework</groupId>
      <artifactId>spring-core</artifactId>
      <version>${prop.Version}</version>
    </dependency>
  </dependencies>
<dependencyManagement>
```

## Special Variable

- `${project.basedir}`: project base directory
- `${project.baseUri}`: project base URI

