# package.json

- 定义nodejs如何解释`.js`文件
- 列出项目所依赖的包 
- 项目可以遵循**语义版本控制规则**指定包版本
- 使项目构建可重现，因此更容易与其他开发人员共享

## 创建package.json

[创建package.json](NodeJs_Create_Package_Json.md)

## package.json字段

[package.json字段](NodeJs_Package_Json_Field.md)

## 典型package.json文件

package.json

```json
{
  "name": "maze",
  "version": "0.0.1",
  "description": "Generate a maze and solve it with RL",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "browserify js/main.js -o js/build.js"
  },
  "repository": {
    "type": "git",
    "url": "git@github.com:rolyatmax/maze.git"
  },
  "keywords": ["maze", "reinforcement", "learning"],
  "author": "Taylor Baldwin",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/rolyatmax/maze/issues"
  },
  "homepage": "https://github.com/rolyatmax/maze",
  "devDependencies": {
    "browserify": "4.1.9",
    "hbsfy": "2.1.0",
    "handlebars": "2.0.0"
  },
  "dependencies": {
    "underscore": "1.7.0"
  },
  "browserify": {
    "transform": [
      "hbsfy"
    ]
  }
}

```