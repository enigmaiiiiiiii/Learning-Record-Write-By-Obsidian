# 配置Maven

- 分为3个等级
  - Project: 大多数在pom.xml文件中完成
  - Installation: 
  - User: 
- 项目下的pom.xml为一个项目设置maven配置
- `${user.home}/.m2/settings.xml`全局配置

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
