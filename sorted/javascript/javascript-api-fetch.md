# Fetch

- [Introduction](#introduction)
- [take a look](#take-a-look)
- [Syntax](#syntax)
- [fetch()和jQuery.ajax()的区别](#fetch和jqueryajax的区别)
- [response](#response)
- [header](#header)
- [fecth in node](#fecth-in-node)

## Introduction

- 用于发起获取资源请求
- 返回包含响应结果的[promise](javascript-promise.md)对象

## take a look

```js
fetch('https://api.github.com/users/github')
  .then(response => response.json())
  .then(data => console.log(data));
```

> response.json() is also a promise object

```js
async () => {
  const response = await fetch('https://api.github.com/users/github');
  const data = await response.json();
  console.log(data);
}
```

## Syntax

`Promise<Response> fetch(input[, init]);`

参数

- input可能是
  - 请求的[url](../network/http-url-and-uri.md), 有些浏览器可能需要`blob:`和`data:`作为scheme
  - a [request object]()
- init是一个**可选**的配置对象, 包含了请求的配置信息
  - method: 请求的方法, GET, POST
  - headers: 一个[header对象](#header)
  - body: 可能是blob, FormData, URLSearchParams, string
  - mode
  - credentials
  - cache
  - redirect
  - referrer
  - referrerPolicy
  - intergrity

return value

- 正常情况返回一个[response对象](#response), 也是一个[promise对象](javascript-promise.md)

exception(异常)

- 请求被AbortController.abort()中断, 抛出一个AbortError
- 接收到包含用户名密码的URL, 抛出一个TypeError

## fetch()和jQuery.ajax()的区别


## response

- 派生自promise

属性

- `Response.body`: 返回一个ReadableStream对象, 用于读取响应体
- `Response.ok`: 返回一个布尔值, 表示请求是否成功, 也就是状态码是否在200-299之间
- `Response.status`: 返回状态码
- `Response.statusText`: 返回状态码对应的文本
- `Response.headers`: 返回一个Headers对象, 里面包含了响应的所有头信息

方法

- `Response.json()`
  - 读取Response()对象, 并设置为已读(只能堆区一次)
  - return a **promise object**, inside is a json object
- `Response.formData()`: 返回一个promise对象, 里面包含了响应的FormData数据
- `Response.text()`: 设置为已读, 返回一个解析为String类型的promise对象,

## header

create a new header object

```js
let myHeaders = new Headers();
myHeaders.append('Content-Type', 'text/plain');
```

## fecth in node

- node-fetch

```bash
npm install node-fetch
```

loading

```js
import fetch from 'node-fetch'
```

to run a .js script, add followed text in package.json

```json
{
    "type": "module"
}
```
