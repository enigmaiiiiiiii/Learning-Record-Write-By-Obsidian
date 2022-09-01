# 闭包

- 嵌套函数就是一个闭包
- 闭包: 可以访问外部函数的参数和变量, 外部函数却不能使用它的参数和变量

函数

```javascript
function createComparisonFunction(propertyName) {
    return function (obj1, obj2) {
        let val1 = obj1[propertyName]; 
        let val2 = obj2[propertyName];

        if (val1 < val2) {
            return -1;
        } else if (val1 > val2) {
            return 1;
        } else {
            return 0;
        }
    };
}
```

- createComparisonFunction()中的活动对象并不能在它执行完毕后销毁
  - 上下文的[作用域链]被销毁
  - 活动对象仍然保留在内存中

```javascript
let compareNames = createComparisonFunction('name);
let result = compareNames({name: 'Nicholas'}, {name: 'Matt'});
compareNames = null;
```

- compareNames = null后， 垃圾回收可以释放内存

## 闭包会占用更多内存