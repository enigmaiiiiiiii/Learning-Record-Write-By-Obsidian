# 配置Maven

## Configuration Level

分为3个等级

- Project Level: pom.xml设置
- Installation Level: ????
- User: 在`${user.home}/.m2/settings.xml`进行全局配置

## 配置文件

[setttings.xml]

## 配置Artifact并行下载数量

- 临时设置

```shell
mvn -Dmaven.artifact.threads=1 verify
```

- 永久设置

```shell
export MAVEN_OPTS=-Dmaven.artifact.threads=3
```

## 设置镜像Repositories

在`${user.home}/.m2/settings.xml`设置

- 设置new repository的id和url

```xml
<settings>
  ...
  <mirrors>
    <mirror>
      <id>other-mirror</id>
      <name>Other Mirror Repository</name>
      <url>https://other-mirror.repo.other-company.com/maven2</url>
      <mirrorOf>central</mirrorOf>
    </mirror>
  </mirrors>
  ...
</settings>
```

## 设置Proxy处理Maven的Http请求

```xml
<settings>
  .
  .
  <proxies>
   <proxy>
      <id>example-proxy</id>
      <active>true</active>
      <protocol>http</protocol>
      <host>proxy.example.com</host>
      <port>8080</port>
      <username>proxyuser</username>
      <password>somepassword</password>
      <nonProxyHosts>www.google.com|*.example.com</nonProxyHosts>
    </proxy>
  </proxies>
  .
  .
</settings>
```

## Set Java Compiler

Set default property in `pom.xml`

```xml
<project>
  <properties>
    <maven.compiler.source>1.8</maven.compiler.source>
    <maven.compiler.target>1.8</maven.compiler.target>
  </properties>
</project>
```

[Comfigure plugin](maven-pom-xml.md#subelements-of-build) directly

```xml
<project>
  ...
  <build>
    <plugins>
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-compiler-plugin</artifactId>
        <version>3.1</version>
        <configuration>
          <source>1.8</source>
          <target>1.8</target>
        </configuration>
      </plugin>
    </plugins>
  </build>
  ...
</project>
```

## profiles

- downloadsources
