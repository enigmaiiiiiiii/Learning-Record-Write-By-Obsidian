# package.json

- 列出项目所依赖的包 
- 指定项目可以使用语义版本控制规则使用的包版本
- 使项目构建可重现，因此更容易与其他开发人员共享

[创建package.json](npm_create_package_json.md)

[package.json字段](npm_package_json_field.md)

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