# 网络编程

## Socket

[Socket](java-socket.md)

## URI, URL, URN

- URI实例只不过是一个结构化的字符串, 支持语法，规范化，解析和相对化操作
- URL实例代表语法意义上的组件
  - 支持解析语法
  - 查找主机
  - 打开到指定资源的网络IO操作

## URL类


[Net](java-net-url.md)

URLDecoder: HTML解码工具类

- 用来解码application/x-www-form-urlencoded格式的字符串

***

> [URL](http-url-and-uri): Uniform Resource Locator

## URI类

[URI](network-uri.md)

- 应用**不应该**试图从File或Path实例的直接字符串构造, 解析URI
- 使用Path.toUri()和File.toURI()创造URI
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

方法

1. 信息

解码后的信息

- `String getAuthority()`
- `String getFragment()`
- `String getHost()`
- `String getPath()`
- `int getPort()`
- `String getQuery()`
- `String getUserInfo()`

原始信息

- `String getRawAuthority()`
- `String getRawFragment()`
- `String getRawPath()`
- `String getRawQuery()`
- `String getRawUserInfo`

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
