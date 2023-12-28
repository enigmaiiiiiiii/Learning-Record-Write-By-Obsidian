# Node Built In Library

* [fs](#fs)
* [path](#path)
* [Buffer](#buffer)
  * [static method](#static-method)
  * [instance method](#instance-method)
* [Util](#util)
* [child_process](#child_process)
* [node:event](#nodeevent)

> no need to `npm install <package>`

## fs

- fs: file system

`rename(oldPath, newPath, callback)`

- `oldPath`
- `newPath`
- `callback`: (err) => {}
  - `callback` have one argument: **error**

`readFile(path[, options], callback)`

- `callback`: is a function like `(err, data) => {}`, means do something with `data` when `readFile()` is done
  - `err`: error object
  - `data`: data read from file

## path



path.join()

```js
path.join('/foo', 'bar', 'baz/asdf', 'quux', '..')
// '/foo/bar/baz/asdf/quux/..'
```
## Buffer

- converting between buffer(binary code) and string

### static method

`Buffer.from(str, encoding)`: convert string to buffer

- `str`: string to be convert
- `encoding`: , default `utf8`
  - `utf8`
  - `utf16le`
  - `latin1`

```js
console.log(Buffer.from('hello world', 'utf8'));
// output: <Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64>
```

### instance method

`buf.toString(encoding[, start[, end]]);`

using encode method specified by `encoding` convert `buf` to string 

- `encoding`: encoding method, default utf8, other available value
  - base64
  - base64url
  - hex
- `start`: start position, default 0
- `end`: end position, default `buffer.length`

## Util

[util](nodejs-util.md)

## Stream

[Stream](nodejs-stream.md)

## child_process

[Child process](nodejs-child-process.md)

## node:event

[node:events](nodejs-node-event.md)

