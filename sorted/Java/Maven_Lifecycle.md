# LifeCycle

## Introduction

- execute when build a project
- Lifecycle 由不同的[build phase](#build-phase)构成
- 一个build phase代表Life cycle的一个阶段

## Three Built-in Lifecycles

[Built-in](Maven_Built_In_Lifecycle.md)

## What Is Build Phase

```bash
mvn verify
```

> `verify` is a build phase
> 这条命令会按顺序运行所有default lifecycle 中的 phase 直到 verify phase

- phase are executed **sequentially**
- 如果一个Build Phase没有绑定[goals](#mojogoal), 这个build phase不会被执行
- build phase会执行所有绑定的goals
- ~~build phase 是一个 core [plugin](Maven_Plugin.md)~~

## Phase List

default

- ...

clean

- pre-clean
- clean
- post-clean

Site

- pre-site
- site
- post-site
- site-deploy

## Bind Plugin In Project

```xml
<project>
  ...
  <build>
    <plugins>
      <plugin>
        <groupId>org.codehaus.modello</groupId>
        <artifactId>modello-maven-plugin</artifactId>
        <version>1.8.1</version>
        <executions>
          <execution>
            <configuration>
              <phase>process-test-resources</phase>
              <models>
                <model>src/main/mdo/maven.mdo</model>
              </models>
              <version>4.0.0</version>
            </configuration>
            <goals>
              <goal>java</goal>
            </goals>
          </execution>
        </executions>
      </plugin>
    </plugins>
  </build>
  ...
</project>
```

why is `<executions/>`

- you can run the same [goal](Maven_Terms.md#mojogoal) multiple times with different configurations

`<phase>process-test-resources</phase>`

- bind to a `process-test-resources` phase



## 组合插件(plugin)和build phase

```shell
mvn clean dependency:copy-dependencies package
```

1. 这条命令先执行到`clean` phase
2. 然后运行插件`dependency:copy-dependencies`
3. 最后运行 `package` phase
