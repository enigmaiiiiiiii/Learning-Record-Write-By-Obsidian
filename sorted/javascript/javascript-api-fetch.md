# JavaScript - API Fetch

* [Introduction](#introduction)
* [take a look](#take-a-look)
* [Syntax](#syntax)
* [fetch() vs jQuery.ajax()](#fetch()-vs-jquery.ajax())
* [response](#response)
* [header](#header)
* [fecth in node](#fecth-in-node)

## Introduction

- Use to start a request to get resource 
- return a [promise](javascript-promise.md) object contains response result

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

parameter

- `input` can be
  - request [url](computer-network-url.md), some browser may need `blob:` and `data:` as [scheme](computer-network-url.md#common-format)
  - a [request object]()
- `init` is a optional [object](javascript-object.md), contains request config info
  - method: request method, e.g. GET, POST
  - header: a header object
  - body: maybe blob, FormData, URLSearchParams, string
  - mode
  - credentials
  - cache
  - redirect
  - referrer
  - referrerPolicy
  - intergrity

return value

- in normal case, return a [response object](#response), also a [promise object](javascript-promise.md)

exception

- request disturbed by AbortController.abort(), throw a AbortError
- receive a URL with username and password, throw a TypeError

## fetch() vs jQuery.ajax()

## response

- derived from [promise](javascript-promise.md)

property

- `Response.body`: Returns a ReadableStream object for reading the response body.
- `Response.ok`: Returns a boolean value, indicating whether the request was successful, meaning whether the status code is within the range of 200-299.
- `Response.status`: Returns the status code.
- `Response.statusText`: Returns the text corresponding to the status code.
- `Response.headers`: Returns a Headers object containing all the response headers.

method

- `Response.json()`
  - Reads the `Response` object, marks it as read (can only be consumed once).
  - Returns a **promise object** containing a JSON object.
- `Response.formData()`: Returns a promise object containing the response's FormData data.
- `Response.text()`: Marks it as read and returns a promise object parsed as a String type.

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
