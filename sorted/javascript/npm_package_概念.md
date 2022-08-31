## npm package的概念

- 一个包必须包含一个[package.json](npm_package_json.md)文件才能发布到npm注册表

## package 格式

- a) 包含由文件描述的程序的package.json文件夹。
- b) 包含 (a) 的压缩 tarball。
- c) 解析为 (b) 的 URL。
- d) `<name>@<version>`与 (c) 一起在注册表上发布
- e) `<name>@<tag>`指向 (d)
- f) `<name>`具有latest满足 (e) 的标签
- g) 一个git url，在克隆时会得到 (a)。

git url格式:

- `git://github.com/user/project.git#commit-ish`
- `git+ssh://user@hostname:project.git#commit-ish`
- `git+http://user@hostname/project/blah.git#commit-ish`
- `git+https://user@hostname/project/blah.git#commit-ish`

## module(模块)

- 模块是任何可以用Node.js 函数require()加载的在`node_modules`目录中的文件或目录
- 可以使用require()加载的模块必须是其中之一
  - 包含`package.json`的文件目录, `package.json`包含main字段
  - 单个JavaScript文件
- 模块不一定是package, 包含package.json文件的模块才是package
- 加载模块使用函数require()
