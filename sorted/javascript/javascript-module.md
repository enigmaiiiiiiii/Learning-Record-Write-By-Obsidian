# Javascript - Module

## Two Module Systems

[ECMAScript](javascript-ecma-module.md)

[CommonJS](javascript-commonjs-module.md)

[Relate](javascript-module-of-es-and-commonjs.md)

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

## .mjs file

- can be identified by runtime environment and build tools, such as `nodejs` and `Babel`
- most servers don't yet know how to handle the `.mjs` file type correctly
