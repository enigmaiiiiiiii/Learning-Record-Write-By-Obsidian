# 变量

[变量声明](javascript_变量声明.md)

## 确定类型

- `typeof a;` 返回a的类型

## NULL值

- 表示一个空对象指针，可以初始化一个未知对象的变量

# 赋值操作

```javascript
function foo(a) {
    var b = a;
    return a + b;
}
var c = foo(2);
```

- LHS查询

`c=`

`a=2`, 隐式变量分配

`b=` 

- RHS查询

`=a`

`return a + b` , 中的a和b

`foo(2)`

