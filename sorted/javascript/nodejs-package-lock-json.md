#  package-lock.json

- 锁定依赖项的版本, 保证每次安装的依赖项都是一致的
- 自动生成的

## 格式

- name: `"name": "projectname" `
- version: `"version": "0.0.1"`
- lockfileVersion : 一个整数版本号，从整数1开始,  `"lockfileVersion": 2`
  - 未提供版本：来自 npm v5 之前的 npm 版本的“古老”[npm-shrinkwrap.json]()包装文件。
  - 1: npm v5 和 v6 使用的 lockfile 版本。
  - 2: npm v7 使用的 lockfile 版本，向后兼容 v1 lockfiles。
  - 3: npm v7 使用的 lockfile 版本，没有向后兼容功能。这用于隐藏的锁定文件 node_modules/.package-lock.json，并且可能会在未来版本的 npm 中使用，一旦对 npm v6 的支持不再相关。
- package:  根目录通常用`""`作为键值, package-lock.json中的[package.json](nodejs-package-json.md)

```json
package: {
  "": {
    "name": "examplename",
    "version": "0.0.1",
  }
}
```

## 典型package-lock.json

```json
{
  "name": "maze",
  "version": "0.0.1",
  "lockfileVersion": 2,
  "requires": true,
  "packages": {
    "": {
      "name": "maze",
      "version": "0.0.1",
      "license": "ISC",
      "dependencies": {
        "underscore": "1.7.0"
      },
      "devDependencies": {
        "browserify": "4.1.9",
        "handlebars": "2.0.0",
        "hbsfy": "2.1.0"
      }
    },
    "node_modules/acorn": {
      "version": "4.0.13",
      "resolved": "https://registry.npmjs.org/acorn/-/acorn-4.0.13.tgz",
      "integrity": "sha1-EFSVrlNh1pe9GVyCUZLhrX8lN4c=",
      "dev": true,
      "bin": {
        "acorn": "bin/acorn"
      },
      "engines": {
        "node": ">=0.4.0"
      }
    },
  }
}

```