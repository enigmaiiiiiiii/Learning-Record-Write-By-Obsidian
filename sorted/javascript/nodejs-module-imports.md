# NodeJS - Import Module

## require() function

- use to import modules, json, and local files

Read Json File

```js
const data = require('data.json')
console.log(data.fieldA)
```

## Search Path

When file `/home/ry/projects/foo.js` call `require("bar.js")`, NodeJS will search in order:

1. `/home/ry/projects/node_modules/bar.js`
2. `/home/ry/node_modules/bar.js`
3. `/home/node_modules/bar.js`
4. `/node_modules/bar.js`

relative search path

- if path begin with `./`, `../`, `/` pass to `require()`, nodejs will search module from relative path

## Environment Variable Path

- when NodeJS can't find the module in any of the other locations, it will search from path in `NODE_PATH` environment variable


