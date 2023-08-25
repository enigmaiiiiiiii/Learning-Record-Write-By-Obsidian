# Linux - Curl

* [What Curl Can Do](#what-curl-can-do)
* [Options](#options)
* [Practical Use](#practical-use)
* [Getting Stuck](#getting-stuck)

## What Curl Can Do

## Options

`-X, --request <method>`

- Specifies a custom [request method](http-request-method.md)

`-d, --data <data>`

`-H, --header <header>`

- Extra [header](http-request-header.md) to include in the request when sending HTTP to a server

`-L, --location`

- Follow redirects
- curl will modify the request method from `POST` to `GET` when the response is 301, 302, 303
- for other 3xx code, curl re-send the request using same method

`-o, --output <file>`

`-I, --head`

## Practical Use

[Curl Practical Use](linux-curl-practical-use.md)

## Getting Stuck

[Getting Stuck](linux-curl-getting-stuck.md)

