# pom.xml

- Project Object Model: 项目对象模型
- 代表了一个maven项目, 包含了一个maven项目的所有信息

元素

- project: Maven项目的顶级元素
- modelVersion
- groupId
- artifactId
- version
- name
- url
- properties
- dependencies: dependency元素列表是该元素的子元素
- build

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

## version元素

- snapshot: 表示代码为最新开发分支版本, 不保证stable和unchanging 

## build元素

负责声明项目目和管理插件

baseBuild部分

- 直接位于build元素之间
- 包含defaultGoal, directory, finalName, filter等元素

***

resources元素

- 由多个resource元素组成
- 指定资源(not code)位置, 不会被编译
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

- 除groupId, artifactId, version之外的子元素
  - [ ] extensions
  - [ ] inherited
  - [ ] configuration
