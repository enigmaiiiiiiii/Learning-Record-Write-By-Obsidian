# Unified

## What it is

- provides a interface for processing text
- always used in combbination with other library

## Practical Usage

convert markdown to html

```js
const markdownText = '# Hello World'
const htmlPromise = await unified()
  .use(remarkParse)  // parse markdown to mdast
  .use(remarkhype)   // convert markdown link to html link
  .use(rehypeSanitize)  // clean up potentially unsafe html
  .use(rehypeStringify) // convert syntax tree node to html string
  .process(markdownText)

const html = htmlPromise.toString()
```

parse markdown ast

```js
import unified from 'unified'
import remarkParse from 'remark-parse'

const markdownText = '# Hello World'
const ast = unified()
  .use(remarkParse)  // parse markdown to mdast
  .parse(markdownText)

console.log(ast)
```

# use plugin

```js
import unified from 'unified'
import remarkParse from 'remark-parse'
const markdownText = '# Hello World'

const result = await unified()
  .use(remarkParse)
  .parse(markdownText)
```

## custom plugin

```js
const unified = require('unified');
const {Plugin} = require('unified');

function replaceHello() {
  function transformer(tree, file) {
    const {visit} = this;

    visit('text', (node) => {
      node.value = node.value.replace(/Hello/gi, 'Hi');
    });
  }

  return transformer;
}

const customPlugin = new Plugin('replace-hello', replaceHello);

const markdown = 'Hello World!';

const result = unified()
  .use(replaceHello)
  .processSync(markdown);

console.log(result.contents.toString()); // 'Hi World!'
```
