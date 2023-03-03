# Axios

## Introduction

- making Http request
- [promise-based](javascript-promise.md) Http Client for node.js

## Making Http request

make get request

```js
const axios = require('axios');
axios('https://jsonplaceholder.typeicode.com/posts')
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log('done');
  });
```

make post request

```js
axios({
  method: 'post',
  url: '/user/12345',
  data: {
    firstName: 'Fred',
    lastName: 'Flintstone'
  }
})
```

method alias to make convenience request

- axios.get(url[, config])
- axios.post(url[, data[, config]])
- axios.request()

## What is the Response look like

> `response` passed to `then` handler

```js
{
  data: {}, // response data
  status: 200, // http status code
  statusText: 'OK', // http status message
  headers: {}, // response headers
  config: {}, // request config
  request: {} // request object
}
```


