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
    sayName(){  // abbreviation method name
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

表示将person.name和person.age分别赋值给变量personName和personAge

对于已经声明的变量使用解构表达式赋值时，必须用`()`括起来

```js
let personName, personAge;
let person = {
  name: "matt",
  age: 27
};
({name: personName, age: personAge} = person);
```

## getter/setter

[getter](javascript-object-getter.md)

[setter](javascript-obejct-setter.md)
