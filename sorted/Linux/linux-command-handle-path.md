# Linux Command - Handle Path

## dirname

- directory name where file in

```sh
$ dirname ~/app/abc.js
/home/username/app
```

## basename

- only file name

```sh
$ basename ~/app/abc.js
abc.js
```

## realpath

> default expand [symbolic link](linux-ln.md#symbolic-link)

get absolute path

```sh
$ realpath ~/app/abc.js
/home/username/app/abc.js
```

with `-m` option, file doesn't need to exist

```sh
$ realpath -m ~/app/non-exist-file.sh
/home/username/app/non-exist-file.sh
```

with `-s` options, symbolic link will not be expanded

- assume that `~/link-to-abc.js` is a symbolic link to `~/app/abc.js`
- first without `-s` option

```sh
$ realpath ~/link-to-abc.js
/home/username/app/abc.js
```

- then with `-s` option

```sh
$ realpath -s ~/link-to-abc.js
/home/username/link-to-abc.js
```

- result is the path of symbolic link itself
