# 网络编程

## Socket

[Socket](Java_Socket.md)

## URL类

> [URL](Http_URL): Uniform Resource Locator

- `new URL(String);` 构建URL对象:
- `public InputStream openStream();`: 获得资源内容

## URI

[URI](Network_URI.md)

- 语法: `[scheme:]scheme-specific-part[#fragment]`
- URI实例由以下9部分组成:
  - scheme: String
  - scheme-specific-part: String
  - authority: String
  - user-info: String
  - host: String
  - port: int
  - path: String
  - query: String
  - fragment: String

## 因特网地址: InetAdderss类

- 静态方法getByName(): 返回代表某个主机的InetAddress对象

```java
InetAddress address = InetAddress.getByName("time-a.nist.gov");
```

- 静态方法getAllByName(String host): 给定一个主机的名称，根据配置的系统解析器，返回其IP地址的数组。

```java
InetAddress[] addresses = InetAddress.getByName("time-a.nist.gov");
```

- getHostAddress(): 返回IP地址字符串
- getHostName(): 返回主机名称
