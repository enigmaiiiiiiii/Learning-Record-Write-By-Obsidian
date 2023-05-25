# package.json

## What It Is

- define metadata and configuration of project

some important fields

- medata: name, version, description
- dependency
- script

## feature

- project can follow [**semantic versioning rules**](semantic-versioning.md) to specify package version

## create package.json

[create package.json](nodejs-create-package-json.md)

## package.json fields

[package.json field](nodejs-package-json-field.md)

## typical package.json file

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