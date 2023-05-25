# browserify

- browser doesn't have `require` method, but Node.js has, using browserify, can use require code to organize JavaScript code

## how to use

a main.js file

```javascript
var unique = require('uniq');
var data = [1, 2, 3, 4, 4, 5];
console.log(unique(data));
```

- use browserify command to generate a `bundle.js` file which contains all the code in main.js and all the code in the modules that main.js requires
- browserify command parse the [AST](abstract-syntax-tree.md)，traverse the dependency graph of the project

```shell
browserify main.js -o bundle.js
```

- in html, use `<script>` tag to import bundle.js

```html
<script src="bundle.js"></script>
```


