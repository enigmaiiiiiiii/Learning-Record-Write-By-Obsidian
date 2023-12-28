# JavaScript - Object

## Create Object

1. use literal，like `{key1:value1, key2: value2}`

> more popular way

```javascript
let person = {
    name: "nichonlas",
    age: 28;,
    sayName: function() {
       // function body
    },
    reportName(){  // abbreviation method name
      console.log(this.name);
    }
}
```

- `name` and `age` is property，`sayName` is method

2. new object() 

```javascript
let person = new Object();
person.name = "Nicklas";
person.age = 20;
person.sayName = function() {
  consol.log(this.name);
}
```

- `name` and `age` is property，`sayName` is method

## Object Property

[property](javascript-property.md)

## Object Destructured

```javascript
let person = {
  name: "Matt",
  age: 27
};
let {name: personName, age: personAge} = person;
```

- assign `person.name` and `person.age` to `personName` and `personAge` respectively

For destructuring assignment to an **already-declared** variable, you must surround the destructuring assignment statement with parentheses `()`.

```js
let personName, personAge;  // declare here
let person = {
  name: "matt",
  age: 27
};
({name: personName, age: personAge} = person);
```

## getter/setter

[getter](javascript-object-getter.md)

[setter](javascript-obejct-setter.md)
