# Plugin

## Introduction

- plugin is a group of [goals](Maven_Terms.md#mojogoal)
- maven实际上是一组maven plugin的核心框架
- 换句话说, plugin执行大部分的实际操作

插件分为两种

- build plugin
  - executed during the build lifecycle
  - configured in `<build/>` from [POM]
- reporting plugin
  - execute during site generation
  - configured in `<reporting/>` from [POM]

## core plugin

- corresponding to default core phases

core plugin list:

- clean
- compiler
- deploy
- failsafe
- install
- resources
- site
- surefire
- verifier

[Core Plugin Detail](Maven_Core_Plugin.md)

## Where Plugins Located 

- locate in `~/m2/repository/org/apache/maven/plugins`


## packaging plugin

[Maven Source Plugin](Maven_Source_Plugin.md)


## Tools Plugin

[Maven AntRun Plugin](Maven_AntRun_Plugin.md)

## Custom A Plugin

[自定义插件](Maven_Custom_Plugin.md)
