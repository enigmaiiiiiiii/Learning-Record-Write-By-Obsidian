# Command node

## run a .js script

```bash
node main.js
```

## get command line arguments

use `process.argv` to get command line arguments

`main.js`

```js
process.argv.forEach((val, index)=>{
    console.log(`${index}: ${val}`);
})
```

when run this command in shell

```bash
node main.js joe
```

output

```
0: /home/usr/.nvm/versions/node/v18.8.0/bin/node
1: /home/usr/project/path/main.js
2: joe
```

## run script use ecma module system

```sh
node --experimental-modules main.js
```

## Options

`-e`

- evaluate string as javascript
- similar to [`eval()` function](javascript-built-in-functions.md#eval)

```sh
node -e "console.log('hello world')"
```

`-p`

- identical to `-e`, but prints the result

