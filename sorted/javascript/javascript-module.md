# JavaScript - Module

* [Two Module Systems](#two-module-systems)
* [index.js File](#index.js-file)
* [Import Module From Html Page](#import-module-from-html-page)
* [.mjs file](#.mjs-file)

## Two Module Systems

[ECMAScript](javascript-ecma-module.md)

[CommonJS](javascript-commonjs-module.md)

> [Contrast](javascript-module-of-es-and-commonjs.md)

## index.js File

- the default entry point of a module
- when folder name as module path, `index.js` file will be try to loaded

> Similar to `__init__.py` in Python

## Import Module From Html Page

set tag `<script type=moduel>`

- use module code in html page

```html
<script type="module">
  // module code
</script>
```

- import external module

```html
<script type="module" src="path/to/myModule.js"></script>
```

## Module file

- When file name can't be found, NodeJs try to add extension
  - first `.js`, then `.json`, last `.node`
- `.json` will be parsed as JSON text file
- `.node` file will be parsed as compiled addon module
- path start with `/` will be treated as absolute path
- path start with `./` will be treated as relative path, `./` means current directory
- if file not start with `/`, `./`, `../`, the module must be core module or in `node_modules` folder

## .mjs file

- can be identified by runtime environment and build tools, such as `nodejs` and `Babel`
- most servers don't yet know how to handle the `.mjs` file type correctly
