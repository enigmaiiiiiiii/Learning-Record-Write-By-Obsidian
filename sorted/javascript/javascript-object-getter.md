# JavaScript - Object Getter

## Why Getter

- Calculating a value dynamically
- Data validation
- Encapsulation

## get keyword

```js
const obj = {
    log: ['example', 'test'],
    get latest() {
        return this.log[this.log.length - 1];
    }
}
console.log(obj.latest);  // test
```

## delete getter

with operator `delete` to delete getter

```js
delete obj.latest;
```

## Define Getter With Object.defineProperty()

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

