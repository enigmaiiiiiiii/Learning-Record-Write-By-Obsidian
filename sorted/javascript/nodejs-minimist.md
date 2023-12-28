# NodeJS - Minimist

## Take A Look

script.js

```js
const minimist = require('minimist');
const args = minimist(process.argv.slice(2), {
  boolean: ['verbose'],
  alias: { v: 'verbose' },
  default: { verbose: false }
});
// Access parsed arguments
console.log('Arguments: ', args._);
console.log('Options: ', args);
```

for command line

```sh
node script.js -v --input-file=input.txt arg1 arg2
```

this command will be parsed like this:

- `process.argv.slice(2)`: first two elements will be ignored
- `boolean`: `--verbose` will be treated as `true`
- `alias`: `-v` will be treated as alias of `--verbose`
- `default`: `--verbose` default value is `false`

## Syntax

`const argv = minimist(args, opts)`

- `args`: [arguments](nodejs-process.md#processargv) from command line, usually `process.argv.slice(2)` to ignore first two elements, which are the [node command] and [script file] 
- `opts`: an object with properties
  - `opts.string`: array of argument names to always treat as strings
  - `opts.boolean`: treat as boolean
  - `opts.alias`: object mapping argument names to aliases

