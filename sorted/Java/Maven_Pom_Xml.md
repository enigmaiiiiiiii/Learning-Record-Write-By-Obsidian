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
  - <>
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

负责声明项目结构和管理插件

BaseBuild部分

- 直接位于project元素的之间
- 包含元素
  - resources
  - plugins
  - defaultGoal
  - extensions
  - directory
  - finalName
  - filter
  - pluginManagement

profile build

- 位于profiles元素之间
- 包含和baseBuild相同的元素

### Sub-elements Of Build

resources元素

- 指定资源(image, sound, video, not code)位置, 不会被编译
- 由多个resource元素组成
- 子元素
  - [x] targetPath: 默认base directory, Jar文件的resources路径通常在[META-INF]()中指定
  - [ ] filtering: 
  - [x] directory: 定义资源目录, 默认`${basedir}/src/main/resources`
  - [x] includes: 通过匹配模式字符串指定包含资源目录中哪些文件, 由一系列include元素组成, include元素指定文件路径
  - [x] excluedes: 与includes相反, exclude覆盖include

testResources元素

- 测试资源
- 用于test phase
- 默认directory为`${basedir}/src/test/resources`

***

plugin元素

- 除groupId, artifactId, version之外, 还有其它元素
- [ ] `<extensions/>`
- [ ] `<inherited/>`
- configuration
  - 特定于单个插件的配置
  - [MoJo bean](Maven_Custom_Plugin.md#simple-mojo-class) 需要的 property(setter, getter)
- execution
  - specify plugin goals to run

pluginManagement

- to configure plugins in children or current project
- lock down plugin versions if children don't provide version
- children have the every right to override `<pluginManagement/>`
- similar to [`<dependencyManagement/>`](#dependencymanagement元素)

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

