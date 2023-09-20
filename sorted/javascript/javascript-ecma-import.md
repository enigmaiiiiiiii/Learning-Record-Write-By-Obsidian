# ECMAScript - Import Module

* [what is this](#what-is-this)
* [Default Import](#default-import)
* [namespace import](#namespace-import)
* [import multiple module](#import-multiple-module)
* [import multiple module with alias](#import-multiple-module-with-alias)
* [Syntax](#syntax)

## What Is This

```js
import default_name from 'module_path'
```

- use to import that are exported by another module
- `module_path`: module identifier
  - must be a string literal
  - can be absolute or relative path
  - relative path name must start with `/, ./, ../`
- must be at the top level
- when `module_path` is a directory, the `index.js` file in that directory is imported

## Default Import

```js
import myDefault from '/modules/my-module.js';
```

- import [default export](javascript-ecma-export.md#default-export) from `/modules/my-module.js`
- myDefault can be *whatever you like*

```js
import myDefault, * as MyModule from 'modules/my-module.js'
```

- `MyModule.default` and `myDefault` reference to the same export

## Namespace import

- import a module namespace object
- a module namespace object is an object describes all exports from a module
- can be used to avoid naming conflicts

```js
import * as MyModule from '/modules/my-module.js'

myModule.doThings()
```

- `myModule` represents a namespace object
- no wildcard import directly pattern, such as `import * from "module-name"` is not allowed

## import multiple module

## import multiple module with alias

***

## Syntax

```js
import defaultExport from "module-name";
import * as name from "module-name";
import { export1 } from "module-name";
import { export1 as alias1 } from "module-name";
import { default as alias } from "module-name";
import { export1, export2 } from "module-name";
import { export1, export2 as alias2, /* … */ } from "module-name";
import { "string name" as alias } from "module-name";
import defaultExport, { export1, /* … */ } from "module-name";
import defaultExport, * as name from "module-name";
import "module-name";
```

- `defaultExport`: module [default export]()
- `module-name`: the module to import, usually a path to a .js file
  - `.js` suffix is optional
  - relative path name must start with `/, ./, ../`
- `export1`, `export2`: name same of export by module
- name: alias name of import module

