# NodeJS - Util

```js
const util = require('util')
import util from `util`
```

## `util.callbackify(original)`

## `util.promisify(original)`

- convert function `original` to a function that return a [promise](javascript-promise.md)

parameter `original`

- must be a function, if not, `promisify()` will throw an error
- will take a callback as its last argument
- its last argument should be a error-first callback
- error-first callback function signature looks like `(error, data) => {}`
- if original last argument is not error-first callback function. An error-first callback will still be passed as its last argument

signature of `original` may looks like

```js
original(one, two, (err, value) => {})
```

the promisified `original` can be used like

```js
promisifiedOriginal(one, two)
  .then(value => {})
  .catch(err => {})
```

for example, wrapping `fs.readFile()` function which is a synchronous function

- `fs.readFile(path, (error, data) =>{})`

```js
const util = require('util');
const fs = require('fs');

const readFileAsync = util.promisify(fs.readFile);

// Now `readFileAsync` is a function that returns a Promise
readFileAsync('example.txt', 'utf8')
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });
```

