# Package In NPM

- a package must contain a [package.json](nodejs-package-json.md) file in order to be published to the npm registry.

## package

~~~
- a) 包含由文件描述的程序的package.json文件夹。
- b) 包含 (a) 的压缩 tarball。
- c) 解析为 (b) 的 URL。
- d) `<name>@<version>`与 (c) 一起在注册表上发布
- e) `<name>@<tag>`指向 (d)
- f) `<name>`具有latest满足 (e) 的标签
- g) 一个git url，在克隆时会得到 (a)。
~~~

git url format:

- `git://github.com/user/project.git#commit-ish`
- `git+ssh://user@hostname:project.git#commit-ish`
- `git+http://user@hostname/project/blah.git#commit-ish`
- `git+https://user@hostname/project/blah.git#commit-ish`

## VS Module

- Module may be not a package, only module with package.json is a package
