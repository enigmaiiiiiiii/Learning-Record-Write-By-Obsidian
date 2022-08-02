# 网络编程

[Socket](Java_Socket.md)

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