# copy and reference

- **primitive value** is simple data, reference value is object that consist of multiple values
- **original value** is **copy**, two variables are independent
- assignment value to an **Object** is **reference**, two variables point to the same object
- all function parameters passing method are **copy**

> when use object as parameter, the parameter and variable point to the same object, the object is on heap memory
> before change the parameter point to memory, the function change the parameter's property will reflect to the object outside the function
> this is **not** mean function parameter is passed by **reference**
> modify the parameter's memory that point to will not affect the object outside the function
> for example use `new` to reassign the parameter, the parameter will point to a new object
> can be treat as pass object parameter is pass copy of [pointer](c++-pointer.md) point to the object

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