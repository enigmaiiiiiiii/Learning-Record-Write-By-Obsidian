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

## gray-matter

- parse **metadata** in **markdown**  file
