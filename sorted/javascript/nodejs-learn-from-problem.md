# nodejs

## 1. Invalid regular expression

scenario: use `RegExp` to match string with incomplete regex character

```js
// for example keyword was get from user input
const keyword = 'abc[';
const reg = new RegExp(`.*${keyword}.*`, 'i')
```

solution

- use `escapeStringRegexp`

```js
import escapeStringRegexp from 'escape-string-regexp';

const keyword = escapeStringRegexp('abc[');
const reg = new RegExp(`.*${keyword}.*`, 'i')
```
