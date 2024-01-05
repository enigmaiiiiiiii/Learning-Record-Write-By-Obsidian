# Typescript - tsconfig Fields List

* [baseUrl](#baseurl)
* [paths](#paths)
* [compilerOptions](#compileroptions)
  * [strictNullChecks](#strictnullchecks)
  * [noImplicitAny](#noimplicitany)
  * [downlevelIteration](#downleveliteration)
  * [strict](#strict)
  * [strictPropertyInitialization](#strictpropertyinitialization)
  * [sourceMap](#sourcemap)

## baseUrl

## paths

## compilerOptions

### strictNullChecks

- default: false
  - but can lead to unexpected errors at runtime
- if true: you **must guarantee** that variable is not null or undefined

### noImplicitAny

- default: false
- if true

this code will raise error

```ts
function fn(s) {
  console.log(s..subtr(3));
}
fn(42);
```

### downlevelIteration

> downlevel is a TypeScript term for compiling to a lower version of JavaScript than the version of JavaScript

- this is a **downlevel compatibility** option
- ECMAScript 6(ES6/ECAMScript 2015) added several new iteration primitives
  - [for...of]()
  - argument spreading(`fn(..args)`)
  - [Symbol.iterator](javascript-symbol.md)
- `downlevelIteration` allows for these new iteration primitives to be used more accurately in es5
- default false, for maintain compatibility with older javascript

demostrate with this code

```ts
const str = "Hello!";
for (const s of str) {
  conssole.log(s);
}
```

when `downlevelIteration: false`

```js
"use strict"
var str = "Hello!";
for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
    var s = str_1[_i];
    console.log(s);
}
```

when `downlevelIteration: true`

```js
"use strict"
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
var e_1, _a;
var str = "Hello";
try {
  for (var _b = __values(str), _c = _b.next(); !_c.done; _c = _b.next()) {
    var s = _c.value;
    console.log(s);
  }
} catch (e_1_1) {
  e_1 = { error: e_1_1 };
} finally {
  try {
    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
  } finally {
    if (e_1) throw e_1.error;
  }
}
```

### strict

```json
{
    "compilerOptions": {
        "strict": true
    }
}
```

- `true`: all on

### strictPropertyInitialization

- can not be used without set `strictNullChecks`

### sourceMap

- For **debugger** and other tools 
- To display the original Typescript source code when actually working with JavaScript
- Source map file will have `.js.map` extension 

### module

- sets the module system for project

Available Settings

- node16
- nodenext
- es2015
- es2020
- commonjs, system, and, umd

Only correct module settings for nodejs runtime

- node16
- nodenext

