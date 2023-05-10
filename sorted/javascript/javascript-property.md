# Property

* [Basic](#basic)
* [Object.defineProperty()](#objectdefineproperty)
* [Data property](#data-property)
* [Accessor properties](#accessor-properties)
* [Object.getOwnPropertyDescriptor()](#objectgetownpropertydescriptor方法)
* [Object.assign()](#objectassign方法)

## Basic

[Basic](javascript-property-basic.md);

## Object.defineProperty()

- change detail of [property descriptor]()
- defines a new property directly on an object

`Object.defineProperty(obj, prop, descriptor)`

```javascript
Object.defineProperty(person, "name", {
  writable: false,
  value: "Nicholas"
});
```

- parameter
  - `obj`: the object on which to define the property
  - `prop`: the name or Symbol of the property to be defined or modified
  - `descriptor`: the [descriptor](#propertye-descriptor) for the property being defined or modified

## Property Descriptor

- a object that describes a property
- property descriptor hava 2 type
  - data property
  - accessor property

Both data and accessor descriptors shared keys

- `configurable`: when to false
  - property descriptor can't be changed
  - property can't be deleted
  - other attribute of its descriptor cannot be changed
    - except `writable` can be changed from true to false
- `enumerable`: whether can be use [`for-in` loop](javascript-statement.md#for-statement)

data property keys

- `value`
- `writable`

accessor property keys

- `get`
- `set`

## Data property

- hava a position that holds a value

data property hava 4 descriptor

- Configurable: 属性是否可通过[delete](javascript-delete.md)删除, 属性的特性是否可修改
- Enumerable: 表示属性是否可通过[for-in]()循环返回, 直接定义的属性，这个特性默认为true
- Writable: 表示属性的值是否可被修改, 默认为true, 表示可被修改
- Value: 包含属性实际的值, 即属性值的写入位置

## Accessor properties

- 访问器属性不包含数据值
- 访问器属性的4个特性
  - Configurable: 表示属性是否可以通过delete删除并重新定义, 特性是否可修改，是否可以改为数据属性
  - Enumerable: 表示属性是否可通过[for-in](javascript-statement-)循环返回
  - Get: 获取函数，在读取属性时调用。default `undefined`
  - Set: 设置函数，在写入属性时调用，defalut `undefined`

## Object.getOwnPropertyDescriptor()

- get property's Descriptor , use descriptor to read the attribute

## Object.assign()

- merge multiple object, 复制源对象中Enumerable特性为true和自有属性赋值到目标对象
- 接收多个Object参数
  - 一个目标对象参数
  - 多个源对象参数, 多个源对象的相同属性，使用最后一个源对象的值
- 赋值期间出错，操作终止，且不会回滚
