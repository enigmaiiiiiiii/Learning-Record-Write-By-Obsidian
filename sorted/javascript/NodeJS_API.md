# Node API

- 不需要 to install

## fs

- fs: file system

rename(oldPath, newPath, callback)

- oldPath
- newPath
- callback: (err) => {}
  - callback have one argument: **error**

## path

path.join()

```js
path.join('/foo', 'bar', 'baz/asdf', 'quux', '..')
// '/foo/bar/baz/asdf/quux/..'
```

## express

[ExpressAPI](NodeJS_Express.md)

## Buffer

- converting between buffer(binary code) and string

### static method

`Buffer.from(str, encoding)`: 将字符串转换为buffer

- str: 被转换的字符串
- encoding: 编码方式, 默认为utf8
  - utf8
  - utf16le
  - latin1

```js
console.log(Buffer.from('hello world', 'utf8'));
// output: <Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64>
```

### instance method

`buf.toString(encoding[, start[, end]]);`

使用encoding指定的编码方式将**buffer转换为字符串**

- encoding: 编码方式, 默认为utf8
  - base64
  - base64url
  - hex
- start: 开始位置, 默认为0
- end: 结束位置, 默认为buffer.length

