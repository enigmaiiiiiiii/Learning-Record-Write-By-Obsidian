# URI

## 语法

`[scheme:]scheme-specific-part[#fragment]`

- scheme: 语义化的协议名称，如http、ftp等
- scheme-specific-part: 协议中的具体内容，如http://www.baidu.com/someDepartment/picture.gif
- fragment: 资源的片段，用于指定资源的一部分，如#fragment

***

## opaque URI:

```
mailto: java-net@www.example.com
news: comp.lang.java
urn:isbn:096139210x
```

## hierarchical URI:

```
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

