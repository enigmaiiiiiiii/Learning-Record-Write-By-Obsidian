# 使用Maven

- [Common Syntax](#common-syntax)
- [Create A Project](#create-a-project)
- [POM配置文件](#pom配置文件)
- [Package Maven project](#package-maven-project)
- [添加到maven仓库](#添加到maven仓库)
- [compile](#compile)
- [clean](#clean)
- [run single test](#run-single-test)
- [help:describe](#helpdescribe)
- [package jar to target directory](#package-jar-to-target-directory)

## Common Syntax

```shell
mvn [options] [<goal(s)>] [<phase(s)>]
```

define plugin properties in command line

```shell
mvn plugin:goal -Dproperty=value
```

- set properties in [pom.xml](maven-pom-xml-build-element.md#plugin元素) use `<configuration/>` element

> set parameter example [help:descripe](#helpdescribe)

## Create A Project

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

[pom.xml](maven-pom-xml.md)

## Package Maven project

create

- `pom.xml`文件的`<packaging>`元素指定了打包类型
  - `<packaging>jar</packaging>`: 生成[jar package](java-jar-file.md)
  - `<packaging>war</packaging>`: 生成[war package](java-war-file.md)

```bash
mvn package # 生成pom.xml指定的package
mvn clean package
```

## 添加到maven仓库

install in locally 安装到本地仓库

- 安装在`${user.home}/.m2/repository`目录下

```bash
mvn install
```

## compile

compile `.java` to `.class`

> 在pom.xml所在的目录下，执行命令

```bash
mvn compile
```

compile test

```shell
mvn test
```

## clean

- remove the `target` directory

## run single test

```bash
mvn test -Dtest=<testClassName>#<testMethodName>
```

## help:describe

goals list of a phase

```bash
mvn help:describe -Dcmd=<phaseName>
```


goals list of a plugin


```bash
mvn help:describe -Dplugin=<pluginName>
```

查看custom plugin in [this example](maven-custom-plugin.md#a-simple-plugin-example)的信息

```
mvn help:describe -Dplugin=code
```

## package jar to target directory

[Maven AntRun Plugin](maven-antrun-plugin.md#copy-jar-file-to-specific-directory)
