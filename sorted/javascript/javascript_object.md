# 对象

[创建对象](#创建对象)
[对象属性](#对象属性)
[对象解构](#object-destructured)
[getter/setter](#gettersetter)


## 创建对象

1. 字面量表示法，`{key1:value1, key2: value2}`的形式

> 更流行的表示方法

```javascript
let person = {
    name: "nichonlas",
    age: 28;,
    sayName: function() {
       // function body
    },
    sayName(){  // 简写方法名
      console.log(this.name);
    }
}
```

- name和age是属性，sayName是方法

2. new object()方法

```javascript
let person = new Object();
person.name = "Nicklas";
person.age = 20;
person.sayName = function() {
  consol.log(this.name);
}
```

- name和age是对象的属性, sayname是对象的方法
- 字面量表示法中属性名可以是数值

## 对象属性

- 属性名永远都是字符串

[属性](JavaScript_Property.md)

## Object Destructured

- 用对象来声明变量

```javascript
let person = {
  name: "Matt",
  age: 27
};
let {name: personName, age: personAge} = person;
```

表示将person.name和person.age分别赋值给变量personName和personAge

对于已经声明的变量使用解构表达式赋值时，必须用`()`括起来

```javascript
let personName, personAge;
let person = {
  name: "matt",
  age: 27
};
({name: personName, age: personAge} = person);
```

## getter/setter

[getter](JavaScript_Object_Getter.md)

[setter](JavaScript_Obejct_Setter.md)
