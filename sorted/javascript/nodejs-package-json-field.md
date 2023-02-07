# package.json字段

> 包含被nodejs识别的字段和被npm识别的字段

- [必须包含name和version字段](#必须包含name和version字段)
- [scripts](#scripts)
- [package入口点: "main"和"export"](#package入口点-main和export)
- [dependencies](#dependencies)
- [devDependencies](#devdependencies)

## 必须包含name和version字段

- 如果我打算发布package, 则`"name"`, `"version"`字段是必须的
- 如果我不打算发布, `"name"`, `"version"`是可选的

```json
{
  "name": "package_name",
  "version": "1.0.0"
}
```
- `"name"`: 应用或package的名称 
  - 规则
    - 小于等于214字符
    - 不能有大写字母
    - 该名称最终成为URL、命令行参数和文件夹名称的一部分。因此，名称不能包含任何非url安全字符。
- `"version"`: 版本信息 

需要包含作者信息可以使用以下格式

```json
{
  "name": "package_name",
  "version": "1.0.0",
  "author": "name<email@example.com>(http://example.com)"
}
```

## scripts

```json
{
  "scripts": {
    "preinstall": "prescript.js",
    "install": "installscript.js",
    "uninstall": "uninstallscript.js",
    "test": "{{test执行的命令}}",
    "exampletest": "{{example要执行的命令}}"
  }
}
```
- `npm install <package>`: 会先执行`prescript.js`, 然后执行`installscript.js`
- `npm uninstall <package>`: 执行`unistallscript.js`脚本
- `npm run test`: 执行test脚本

## package入口点: "main"和"export"

- `"main"`: 只能定义 package 的 main 入口点(entry point)
- `"exports"`: 可以定义多个入口点; 可以阻止包的使用者使用未定义的导出
  - 只有定义在exports中的路径可以被import(引入)

```json
{
  "name": "my-package",
  "exports": {
    ".": "./lib/index.js",
    "./lib": "./lib/index.js",
    "./lib/index": "./lib/index.js",
    "./lib/index.js": "./lib/index.js",
    "./feature": "./feature/index.js",
    "./feature/index": "./feature/index.js",
    "./feature/index.js": "./feature/index.js",
    "./package.json": "./package.json"
  }
}
```

exports子路径

```json
{
    "export": {
        ".": "./index.js",
        "./submodule.js": "./src/submodule.js"
    }
}
```

使用子路径

```javascript
import submodule from 'es-module-package/submodule.js';
// 加载 ./node_modules/es-module-packages/src/submodule.js
```

## dependencies

- 向package.json中添加dependencies

```shell
npm install <package_name> [--save-prod]
```
- 向package.json中添加devdependencies

```shell
npm install <package_name> --save-dev
```

in `package.json`

```json
{
  "dependencies": {
    "package_name": "semver-version"
  }
}
```

[semver-version](/unsorted/semantic-versioning.md )

- `>`: 严格大于
- `>=`
- `<`
- `<=`
- `~`:
  - 如果指定了minor version, 则允许patch version的更新
  - 如果未指定patch version, 则允许minor version的更新
  - `~1.2.3` = `>=1.2.3 <1.(2+1).0` = `>=1.2.3 <1.3.0`
  - `~1.2` = `>=1.2.0 <1.(2+1).0` = `>=1.2.0 <1.3.0`
- `^`:
  - `^1.2.3` = `>=1.2.3 <2.0.0`
  - `^0.2.3` = `>=0.2.3 <0.3.0`
- `x`
  - `1` = `>=1.0.0 <2.0.0`
- `*`: `>=0.0.0`

## devDependencies

- 用于开发环境的依赖包
- such as: Babel, ESLint, Webpack, Karma, Mocha, Chai, Sinon, Istanbul, Nightwatch, Protractor, etc.

```bash
npm install --save-dev <package_name>
```