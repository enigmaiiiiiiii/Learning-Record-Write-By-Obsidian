# Axios

## Introduction

- making Http request

## making Http request

```js
const axios = require('axios');
axios.get('https://jsonplaceholder.typeicode.com/posts')
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  })
```