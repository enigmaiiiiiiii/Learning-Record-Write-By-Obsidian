# setter

## set语法

`{set prop(value) { ... }}`

- 必须有一个参数
- prop名称不能设置为已有属性名, 也不能重复设置

```js
const language = {
    set current(name) {
        this.log.push(name);
    }
    log: [];
}
language.current = 'EN';
language.current = 'FA';
console.log(language.log);  // ['EN', 'FA']
```

## delete删除setter

```js
delete language.current;
```

## defineProperty定义setter

```js
const o = {a: 0};
Object.defineProperty(o, 'b', {
    set: function(x) { this.a = x / 2; }
});

```

## 使用计算属性名

```js
const expr = 'foo';
const obj = {
    baz: "bar",
    set [expr(v)]{this.baz = v;}
}
console.log(obj.foo);  // bar
obj.foo = "baz";
console.log(obj.baz);  // baz
```