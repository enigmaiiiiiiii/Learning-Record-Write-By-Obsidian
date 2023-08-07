# URI

- [Syntax](#syntax)
- [opaque URI](#opaque-uri)
- [hierarchical URI](#hierarchical-uri)

## Syntax

`[scheme]://[authority][path][?query][#fragment]`

for example

```
https://www.example.com/products/laptops?brand=dell&price=1000#section-1`
```

- `https` is the scheme
- `www.example.com` is the authority
- `/products/laptops` is the path
- `brand=dell&price=1000` is the query
- `section-1` is the fragment

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

