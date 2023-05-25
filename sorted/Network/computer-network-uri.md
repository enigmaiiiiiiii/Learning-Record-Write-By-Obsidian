# URI

- [Syntax](#syntax)
- [opaque URI](#opaque-uri)
- [hierarchical URI](#hierarchical-uri)

## Syntax

`[scheme:]scheme-specific-part[#fragment]`

- scheme: semantically meaningful protocol name, like `http`, `ftp`
- scheme-specific-part: 协议中的具体内容，如http://www.baidu.com/someDepartment/picture.gif
- fragment: 资源的片段，用于指定资源的一部分，如#fragment

## Encoded URI

- uri may have special characters, which can not be transmit over the internet

## opaque URI

```text
mailto: java-net@www.example.com
news: comp.lang.java
urn:isbn:096139210x
```

## hierarchical URI

```text
http://exaple.com/languages/java/
sample/a/index.html#28
../../demo/b/index.html
file:///~/calendar
```

- 需要进一步解析的hierarchical URI语法

`[scheme:][//authority][path][?query][#fragment]`

- 基于服务器的hierarchical URI语法

> 目前所用的URI方案几乎都是基于服务器的hierarchical URI语法

`[user-info@][host][:port]`

