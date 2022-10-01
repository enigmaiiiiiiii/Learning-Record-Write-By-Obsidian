# 自定义插件

首先是命名

- 典型命名: `<plugin-name>-maven-plugin`

> 不要命名为`maven-<plugin-name>-plugin`, 这是apache 团队的保留命名方式

## 一个简单的mojo

- 首先[初始化一个maven项目](Maven_Using.md#创建一个项目)

定义项目

- groupId
- artifactId
- version
- packageing
- dependencies

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

简单Mojo类

- plugin-tools会自动扫描`@Mojo`注解或`goal`javadoc annotation, 并将包含在插件配置文件

```java
package sample.plugin;
 
import org.apache.maven.plugin.AbstractMojo;
import org.apache.maven.plugin.MojoExecutionException;
import org.apache.maven.plugins.annotations.Mojo;
 
/**
 * Says "Hi" to the user.
 *
 */
@Mojo( name = "sayhi")
public class GreetingMojo extends AbstractMojo
{
    public void execute() throws MojoExecutionException
    {
        getLog().info( "Hello, world." );
    }
}
```