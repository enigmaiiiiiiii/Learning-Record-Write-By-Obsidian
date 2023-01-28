# URL

- [Introduction](#introduction)
- [通用格式](#通用格式)
- [主机和端口](#主机和端口)
- [用户名和密码](#用户名和密码)
- [参数](#参数)
- [查询](#查询)
- [相对 URL](#相对-url)
- [编码机制](#编码机制)
- [URI](#uri)

## Introduction

-   统一资源定位系统

> 如: URL 地址：`http://www.baidu.com/someDepartment/picture.gif` > `http:`: 表示访问数据源的机制
> `www.baidu.com`: 主机名
> `/someDepartment/picture.gif`: 路径, 表示请求的资源

## 通用格式

`<scheme>://<user>:<password>@<host>:<port>/<path>;<params>?<qurey>#<frag>`

| 组建     | 描述                                                                                     | 默认值 |
| -------- | ---------------------------------------------------------------------------------------- | ------ |
| scheme   | 哪种协议                                                                                 | 无     |
| user     | 用户名                                                                                   | 匿名   |
| password |                                                                                          |        |
| host     |                                                                                          |        |
| port     |                                                                                          |        |
| path     |                                                                                          |        |
| params   |                                                                                          |        |
| query    | 某些方案会用这个组件传递参数以激活应用程序, 如数据库，公告板，搜索引擎以及其他因特网网关 | 无     |
| frag     |                                                                                          | 无     |

## 主机和端口

```
http://www.baidu.com:80/index.gif 通过主机名称访问资源
http://161.58.228.45:80/index.html 通过ip地址访问资源
```

> TCP 协议的 Http，默认端口是 80

## 用户名和密码

```
ftp://ftp.prep.ai.mit.edu/pub/gnu
ftp://anonymous@ftp.prep.ai.mit.edu/pub/gnu
ftp://anonymous:mypasswd@ftp.prep.ai.mit.edu/pub/gnu
http://joe:joespasswd@www.joes-hardware.com/sales
```

## 参数

## 查询

<center>
http://www.joes-hardware.com/inventory-checkj.cgi?item=12345&quantity=1
</center>

-   ?右边成为 query 组件
-   `?key1=value1&key2=value2`提供给网络服务器的额外参数
-   网关可以当作访问其他应用程序的访问点

prag

-   用于进一步划分资源

## 相对 URL

-   省略了 可以通过所属资源的基础 URL 中推导出来 的 **协议，主机和其他组件**
-   提供了一组资源的可移植性

## 编码机制

> 用户希望 URL 中包含除通用的 ASCII 之外的二进制数据或字符

-   百分号(%)后跟两个 ASCII 编码的字符表示十六进制数

## URI

-   更通用的**概念**

> 不是更通用的格式

-   URL 是一个 URI 的子集

[URI](Network_URI.md))
