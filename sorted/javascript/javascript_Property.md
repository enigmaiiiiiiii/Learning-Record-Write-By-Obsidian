# 属性

- 原始值不能有属性，但是添加属性的语句不会报错

##  数据属性

- 数据属性包含一个保存数据值的位置
- 有四个特性描述属性的行为
  - Configurable: 属性是否可通过[delete](javascript_delete.md)删除, 属性的特性是否可修改  
  - Enumerable: 表示属性是否可通过[for-in](javascript_statement_)循环返回, 直接定义的属性，这个特性默认为true
  - Writable: 表示属性的值是否可被修改, 默认为true, 表示可被修改
  - Value: 包含属性实际的值, 即属性值的写入位置
  
## 访问器属性

- 访问器属性不包含数据值
- 访问器属性的4个特性
  - Configurable: 表示属性是否可以通过delete删除并重新定义, 特性是否可修改，是否可以改为数据属性
  - Enumerable: 表示属性是否可通过[for-in](javascript_statement_)循环返回
  - Get: 获取函数，在读取属性时调用。默认值undefined
  - Set: 设置函数，在写入属性时调用，默认值undefined

## Object.defineProperty()方法

```javascript
Object.defineProperty(person, "name", {
  writable: false,
  value: "Nicholas"
});
```
- 用来修改默认属性 
- 接收3个参数， 
  - 被修改的属性对象
  - 被修改的属性 
  > 该参数可以是一个Object, 可以一次修改多个属性特性
  - 数据属性对应的四个特性(Configurable,Enumerable,Writable, value)

## Object.getOwnPropertyDescriptor()方法

- 获得属性的Descriptor, 通过Descriptor可以读取属性特性

## Object.assign()方法

- 合并对象, 复制源对象中Enumerable特性为true和自有属性赋值到目标对象
- 接收多个Object参数
  - 一个目标对象参数
  - 多个源对象参数, 多个源对象的相同属性，使用最后一个源对象的值
- 赋值期间出错，操作终止，且不会回滚 



