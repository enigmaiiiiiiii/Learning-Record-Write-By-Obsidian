# getter

## Why getter

- Calculating a value dynamically
- Data validation
- Encapsulation(封装)

## get 语法

```js
const obj = {
    log: ['example', 'test'],
    get latest() {
        return this.log[this.log.length - 1];
    }
}
console.log(obj.latest);  // test
```

## 使用 delete 删除 getter

```js
delete obj.latest;
```

## defineProperty定义getter

```js
var obj = {a: 0}
Object.defineProperty(obj, 'prop_name', {
    get: function() {
        return prop_value;
    }
});
```

## Computed Property Getter

this is [computed property](javascript-property.md#computed-property)

```js
var expr = 'foo';
var obj = {
    get [expr]() { return 'bar'; }
}
console.log(obj.foo);
```

