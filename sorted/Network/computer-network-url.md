# URL

* [What is this](#what-is-this)
* [Common Format](#common-format)
* [host and port](#host-and-port)
* [user name and password](#user-name-and-password)
* [parameter](#parameter)
* [Query String](#query-string)
* [prag](#prag)
* [relative URL](#relative-url)
* [encoding mechanism](#encoding-mechanism)
* [URI](#uri)

## What is this

- Uniform Resource Locator

for URL address：`http://www.baidu.com/someDepartment/picture.gif`

- `http:` protocol
- `www.baidu.com`: host name
- `/someDepartment/picture.gif`: resource path

## Common Format

`<scheme>://<user>:<password>@<host>:<port>/<path>;<params>?<qurey>#<frag>`

| component | description | default value |
| --------- | ----------- | ------------- |
| scheme    | protocol    | no default    |
| user      | user name   | Anonymous     |
| password  |             |               |
| host      |             |               |
| port      |             |               |
| path      |             |               |
| params    |             |               |
| query     |             | no default    |
| frag      |             | no default    |

## host and port

```
http://www.baidu.com:80/index.gif access resource by host name
http://161.58.228.45:80/index.html access resource by ip address
```

> Http of TCP protocol，default port is 80

## user name and password

```
ftp://ftp.prep.ai.mit.edu/pub/gnu
ftp://anonymous@ftp.prep.ai.mit.edu/pub/gnu
ftp://anonymous:mypasswd@ftp.prep.ai.mit.edu/pub/gnu
http://joe:joespasswd@www.joes-hardware.com/sales
```

## parameter

## Query String

<eenter>
http://www.joes-hardware.com/inventory-checkj.cgi?item=12345&quantity=1
</eenter>

- right of `?` is query component
- `?key1=value1&key2=value2` provide additional parameters to the network server

> gateway can be used as an access point to other applications

## prag

- use to further divide the resource

## relative URL

- omit the [scheme](#scheme), [host](#host-and-port) and other components that can be deduced from the base URL of the owning resource
- provide a set of resources portability

## encoding mechanism

> 用户希望 URL 中包含除通用的 ASCII 之外的二进制数据或字符
> 

- 百分号(%)后跟两个 ASCII 编码的字符表示十六进制数

## VS URI

- more general **concept**

> **not** a more **general format**

- URL is subset of URI

[URI](network-uri.md))
