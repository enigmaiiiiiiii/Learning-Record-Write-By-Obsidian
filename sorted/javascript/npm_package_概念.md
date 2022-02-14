## npm package的概念

- 一个包必须包含一个[package.json](npm_package_json.md)文件才能发布到npm注册表

## package 格式

- a) 包含由文件描述的程序的package.json文件夹。
- b) 包含 (a) 的压缩 tarball。
- c) 解析为 (b) 的 URL。
- d) <name>@<version>与 (c) 一起在注册表上发布
- e) <name>@<tag>指向 (d)
- f) <name>具有latest满足 (e) 的标签
- g) 一个git url，在克隆时会得到 (a)。

git url格式:
`git://github.com/user/project.git#commit-ish`
`git+ssh://user@hostname:project.git#commit-ish`
`git+http://user@hostname/project/blah.git#commit-ish`
`git+https://user@hostname/project/blah.git#commit-ish`

> 模块不一定是package, 包含package.json文件的模块才是package
> 加载模块使用函数require()