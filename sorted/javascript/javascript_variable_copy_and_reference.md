# 复制与引用 

- 原始值时简单的数据，引用值则是由多个值构成的对象
- **原始值**赋值行为是**复制**, 两变量相互独立
- **对象**赋值行为是**引用**, 两变量指向同一对象
- 所有函数的参数传递方式是复制

> 当对象作为参数时，参数和变量指向同一个对象, 该对象在堆内存上
> 在改变参数所指内存之前，函数内修改参数的属性会反映到函数外部的对象上
> 这并不意味着函数参数的传递方式是引用
> 修改函数内部参数所指内存对象，将不会影响外部对象
> 可以理解为传递对象参数实际传递的是对象[指针](c++_指针.md)的复制

```javascript
function setName(obj) {
  obj.name = "Nicholas";
  obj = new Object();  // 改变obj所指对象
  obj.name = "Greg";
}
let person = new Object();
setName(person);
console.log(person.name);  // "Nicholas"
```