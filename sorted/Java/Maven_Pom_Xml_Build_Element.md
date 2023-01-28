# Maven POM Build Element

- [introduction](#introduction)
- [Sub-elements Of Build](#sub-elements-of-build)
- [resources元素](#resources元素)
- [testResources元素](#testresources元素)
- [plugin元素](#plugin元素)
- [pluginManagement](#pluginmanagement)

## Introduction

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

## Sub-elements Of Build

## Resources Element

- 指定资源(image, sound, video, not code)位置, 不会被编译
- 由多个resource元素组成
- 子元素
  - [x] targetPath: 默认base directory, Jar文件的resources路径通常在[META-INF]()中指定
  - [ ] filtering: 
  - [x] directory: 定义资源目录, 默认`${basedir}/src/main/resources`
  - [x] includes: 通过匹配模式字符串指定包含资源目录中哪些文件, 由一系列include元素组成, include元素指定文件路径
  - [x] excluedes: 与includes相反, exclude覆盖include

## testResources Element

- 测试资源
- 用于test phase
- 默认directory为`${basedir}/src/test/resources`

## plugin Element

- 除groupId, artifactId, version之外, 还有其它元素
- [ ] `<extensions/>`
- [ ] `<inherited/>`
- configuration
  - set plugins property
  - 特定于单个插件的配置
  - [MoJo bean](Maven_Custom_Plugin.md#simple-mojo-class) 需要的 property(setter, getter)
- `<execution/>`
  - specify plugin goals to run

## pluginManagement

- to configure plugins in children or current project
- lock down plugin versions if children don't provide version
- children have the every right to override `<pluginManagement/>`
- similar to [`<dependencyManagement/>`](#dependencymanagement元素)