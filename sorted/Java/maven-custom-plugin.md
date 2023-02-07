# 自定义插件

- [a simple plugin example](#a-simple-plugin-example)
- [Simple Mojo Class](#simple-mojo-class)
- [install to local](#install-to-local)
- [use plugin](#use-plugin)
- [naming convention](#naming-convention)
- [Attaching Mojo To the Build Lifecycle](#attaching-mojo-to-the-build-lifecycle)

## a simple plugin example

- 首先[初始化一个maven项目](maven-using.md#创建一个项目)

add content to `pom.xml`

- `<packaging/>` set to `maven-plugin`
- add two required `<dependencies/>`
  - maven-plugin-api
  - maven-plugin-annotations

```xml
<groupId>sample.plugin</groupId>
<artifactId>hello-maven-plugin</artifactId>
<version>1.0-SNAPSHOT</version>
<packaging>maven-plugin</packaging>

<dependencies>
    <dependency>
        <groupId>org.apache.maven</groupId>
        <artifactId>maven-plugin-api</artifactId>
        <version>3.0</version>
        <scope>provided</scope>
    </dependency>

    <!-- dependencies to annotations -->
    <dependency>
        <groupId>org.apache.maven.plugin-tools</groupId>
        <artifactId>maven-plugin-annotations</artifactId>
        <version>3.4</version>
        <scope>provided</scope>
    </dependency>
</dependencies>
```

## Simple Mojo Class

- plugin-tools会自动扫描`@Mojo`注解或`goal` javadoc annotation, 并将包含在插件配置文件

```java
package sample.plugin;

import org.apache.maven.plugin.AbstractMojo;
import org.apache.maven.plugin.MojoExecutionException;
import org.apache.maven.plugins.annotations.Mojo;

/**
 * Says "Hi" to the user.
 *
 */
@Mojo( name = "greet")
public class GreetingMojo extends AbstractMojo
{
    public void execute() throws MojoExecutionException
    {
        getLog().info( "Hello, world." );
    }
}
```

- `@Mojo(name="greet")`: greet is name of [goal](maven-terms.md#mojogoal)
- `getLog().info()`: display information
- Method `execute()` can throw two exceptions
  - `org.apache.maven.plugin.MojoExecutionException`
  - `org.apache.maven.plugin.MojoFailureException`

## install to local

```bash
mvn clean install
```

## use plugin

```bash
mvn sample.plugin:hello-maven-plugin:1.0-SNAPSHOT:greet
```

## naming convention

命名约定: `<plugin-name>-maven-plugin`

> 不建议命名为`maven-<plugin-name>-plugin`, 这是 apache 团队的保留命名方式

- 通过使用命名约定, maven可以解析前缀, 简化命令

```bash
mvn code:greet
```

add pluginGroups in `settings.xml` to set default search path

- not required

```xml
<pluginGroups>
    <pluginGroup>sample.plugin</pluginGroup>
</pluginGroups>
```

## Attaching Mojo To the Build Lifecycle

add following to `pom.xml`

```xml
<project>
    ...
    <build>
        <plugin>
            <groupId>com.example</groupId>
            <artifactId>code-maven-plugin</artifactId>
            <version>0.0.1-SNAPSHOT</version>
            <executions>
                <execution>
                    <phase>compile</phase>
                    <goals>
                        <goal>greet</goal>
                    </goals>
                </execution>
            </executions>
        </plugin>
    </build>
    ...
</project>
```

- `<phase/>`: which phase plugin will be executed



