# Javascript In Browser

* [tag script](#tag-script)
* [Import External Script](#import-external-script)
* [Improt Inline Script](#improt-inline-script)

## tag script

`<script>` use to create a script block

attribute

- src: External script source, or URI
- type: define the type of script
  - default javascript
  - support mime, like text/javascript, text/ecmascript, aplication/javascript, application/ecmascript
  - when value is **module**: code will be treat as Javascript [module](javascript-module.md)

## Import External Script

```html
<script src='main.js'></script>
```

## Improt Inline Script

> variable defined by var is property of [window](javascript-dom.md#window) object

```html
<script>
    var x = 'hello';
    console.log(x);
</script>
```
