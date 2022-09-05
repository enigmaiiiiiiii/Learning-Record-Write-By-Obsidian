# npm

- Node.js的包管理工具

npm可以用来

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
- 默认配置保存在`lib/utils/defs.js`中，是不能更改的

## npm init

> 同npm create

## npm-install

- 安装一个包和依赖包
- install命令安装依赖包的依据的顺序
  - npm-shrinkwrap.json
  - package-lock.json
  - yarn.lock

## npm package

[npm包](npm_package.md)
