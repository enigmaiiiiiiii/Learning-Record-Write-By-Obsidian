# 委托

理解委托的方法, [是把委托看作一个类型安全，面向对象的c++函数指针](c++_function_pointer.md)

## 声明委托

```c#
delegate void Mydel(int x);
```

- 用delegate关键字声明委托
- 没有方法主体
- 看作包含相同返回类型和签名的方法的有序列表
- 调用委托会调用其中所有方法

## 声明委托对象

`del1 = new MyDel(myInstObj.MyM1)`

## 组合委托

```c#
MyDel delA = myInstObj.MyM1;
MyDel delB = SClass.OthreM2;

delA += delB;  // 增加方法
MyDel delC = delA + delB; // 组合方法
delC -= delA;  // 移除方法
```

- 以加入的先后顺序作为调用调用顺序

## 调用委托

- 调用委托中的所有方法

## 委托返回值

- 返回最后一个方法的返回值

## 引用参数

- 引用参数值的新值传给下一个参数

## lambda表达式

```c#
MyDel del = delegate(int x) {return x};  // 匿名方法
MyDel del = (int x) => {return x};  // lambda
```
