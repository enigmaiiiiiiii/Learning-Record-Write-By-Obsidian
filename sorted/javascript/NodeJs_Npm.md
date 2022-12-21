# npm

- Node.js的包管理工具

## npm可以用来

- 调整应用程序代码包 
- 下载立即使用的独立工具
- 使用npx运行包而不下载
- 将代码限制为特定开发人员
- 与任何npm用户共享代码。
- 创建组织来协调包维护、编码和开发人员。
- 通过组织来组建虚拟团队。
- 管理多个版本的代码和代码依赖关系。
- 更新底层代码时，可以轻松更新应用程序。
- 发现解决同一难题的多种方法。
- 寻找正在处理类似问题和项目的其他开发人员。

## 配置npm

- 命令行参数设置
- 环境变量`npm_config_<key>`
- 用户配置文件`$HOME/.npmrc`
- 全局配置文件`./etc/npmrc`
- 项目配置文件`/path/to/project/.npmrc`
- 默认配置保存在`lib/utils/defs.js`中，是不能更改的

`.npmrc`文件

- `key=value`格式组成的文件
- 环境变量用`${VARIABLE_NAME}`表示

## Use npm

[使用](Npm_Using.md)


## npm init

> 同npm create

- 语法: `npm init <initializer>`
  - `initializer`: 是npm package, 创建或更新package
  - 如果`initializer`被忽略, 则通过命令行询问的方式生成[package.json](NodeJs_Package_Json.md)

`npm init` 转换为对应 `npm exec`

- `npm init foo` $\rightarrow$ `npm exec create-foo`
- `npm init @usr/foo` $\rightarrow$ `npm exec @usr/create-foo`

创建一个React项目

```bash
npm init react-app ./my-react-app
```

生成新的workspace(带有package.json的空项目)

```bash
npm init -w packages/a
```

## npm-install

- 安装一个包及其依赖包
- install命令安装依赖包的依据的顺序
  - npm-shrinkwrap.json
  - package-lock.json
  - yarn.lock

选项:

`--save-dev`:

- 将包添加到`devDependencies`中
- 开发工具的依赖, 如语法检查

## npm run


## npm package

[npm包](NodeJs_Npm_Package.md)

## npm exec
