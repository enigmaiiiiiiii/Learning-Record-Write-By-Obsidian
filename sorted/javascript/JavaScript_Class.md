# JavaScript 中的 Class

- class关键字声明一个类

## 定义一个class

```js
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}
```

## 局部Class

```js
let Rectangle = class {
    contructor(height, width) {
        this.height = height;
        this.width = width;
    }
}
console.log(Rectangle.name); // "Rectangle"
```

## method

原型方法: [prototype](JavaScript_Prototype.md) method

生成器方法: [Generator Method](JavaScript_Generator_Function.md)

## javascript中的class是什么

## new和class有什么关系

- 运算符new创建一个class实例之前, 必须定义class