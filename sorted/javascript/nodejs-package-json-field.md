# package.json - Fields

> 包含被nodejs识别的字段和被npm识别的字段

## must contain `name` and `version` fields

- if you want to publish your package, `"name"` and `"version"` are required
- otherwise, `"name"` and `"version"` are optional

```json
{
  "name": "package_name",
  "version": "1.0.0"
}
```
- `"name"`: application name or package name, with following rules
  - cannot longer than 214 characters
  - no uppercase letters
  - this name will become part of a URL, an argument on the command line, and a folder name. Therefore, the name can't contain any non-URL-safe characters.
- `"version"`: version infomation
  - use [semantic versioning](semantic-versioning.md)

if you want to include author information, you can use the following format

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
    "test": "<test command>",
    "exampletest": "<example command>"
  }
}
```

- `npm install <package>`: will execute `prescript.js` first, then`installscript.js`
- `npm uninstall <package>`: execute `uninstallscript.js`
- `npm run test`: execute `<test command>`

## entry point of package: "main" and "export"

- `"main"`: can only define the main entry point of the package
- `"export"`: Able to define multiple entry points
  - Only the paths defined in exports can be imported
  - Can prevent the package user from using undefined exports

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

exports sub path

```json
{
    "export": {
        ".": "./index.js",
        "./submodule.js": "./src/submodule.js"
    }
}
```

import submodule

```javascript
import submodule from 'es-module-package/submodule.js';
// this will load ./node_modules/es-module-packages/src/submodule.js
```

## dependencies

add dependencies to package.json

```shell
npm install <package_name> --save-prod
```
add devdependencies to package.json

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

[semver-version](semantic-versioning.md)

- `>`: strict greater than
- `>=`
- `<`
- `<=`
- `~`
  - if [minor version](semantic-versioning.md) is specified, allow [patch version](semantic-versioning.md) update
  - if [patch version]() is not specified, allow [minor version](semantic-versioning.md) update
  - `~1.2.3` = `>=1.2.3 <1.(2+1).0` = `>=1.2.3 <1.3.0`
  - `~1.2` = `>=1.2.0 <1.(2+1).0` = `>=1.2.0 <1.3.0`
- `^`:
  - `^1.2.3` = `>=1.2.3 <2.0.0`
  - `^0.2.3` = `>=0.2.3 <0.3.0`
- `x`
  - `1` = `>=1.0.0 <2.0.0`
- `*`: `>=0.0.0`

## devDependencies

- package for development environment
- such as: Babel, ESLint, Webpack, Karma, Mocha, Chai, Sinon, Istanbul, Nightwatch, Protractor, etc.

```bash
npm install --save-dev <package_name>
```
