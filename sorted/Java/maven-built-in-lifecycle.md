# Maven Three Built-in Lifecycles

## Introduction

1. default
2. clean
3. site

default life cycle as example, 包含几个主要的[build phase](#build-phase)

- validate: 验证
- compile: 编译
- test: 测试
- package: 打包
- verify: 检查
- install: 安装到local repository
- deploy: 部署

> 完整的[phase list](maven-lifecycle.md#phase-list)

## Default Life Cycle

- **defined without any plugin bindings**

## plugin binding defined for each packaging

> defined in `METF-INF/plexus/default-bindings.xml`

`pom` packaging

```xml
<phases>
  <install>
    org.apache.maven.plugins:maven-install-plugin:2.4:install
  </install>
  <deploy>
    org.apache.maven.plugins:maven-deploy-plugin:2.7:deploy
  </deploy>
</phases>
```

`jar` packaging

```xml
<phases>
  <process-resources>
    org.apache.maven.plugins:maven-resources-plugin:2.6:resources
  </process-resources>
  <compile>
    org.apache.maven.plugins:maven-compiler-plugin:3.1:compile
  </compile>
  <process-test-resources>
    org.apache.maven.plugins:maven-resources-plugin:2.6:testResources
  </process-test-resources>
  <test-compile>
    org.apache.maven.plugins:maven-compiler-plugin:3.1:testCompile
  </test-compile>
  <test>
    org.apache.maven.plugins:maven-surefire-plugin:2.12.4:test
  </test>
  <package>
    org.apache.maven.plugins:maven-jar-plugin:2.4:jar
  </package>
  <install>
    org.apache.maven.plugins:maven-install-plugin:2.4:install
  </install>
  <deploy>
    org.apache.maven.plugins:maven-deploy-plugin:2.7:deploy
  </deploy>
</phases>
```
