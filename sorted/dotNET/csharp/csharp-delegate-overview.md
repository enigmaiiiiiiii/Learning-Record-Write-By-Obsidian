# CSharp - Delegate Overview
 
* [Delegate Declaration](#delegate-declaration)
* [Create Delegate Instance](#create-delegate-instance)
* [Group Delegate](#group-delegate)
* [invoke Delegate](#invoke-delegate)
* [Delegate Return Value](#delegate-return-value)
* [Create Anonymous Delegate](#create-anonymous-delegate)

## What is Delegate

> 理解委托的方法, [是把委托看作一个类型安全，面向对象的c++函数指针](c++-function-pointer.md)

- A Delegate can be thought of as a type-safe, object-oriented function pointer.

## Delegate Declaration

```c#
delegate void Mydel(int x);
```

## Create Delegate Instance

```c
del1 = new MyDel(myInstObj.MyM1)
```

- `myInstObj.MyM1` is the method to be delegated

## Group Delegate

```c
MyDel delA = myInstObj.MyM1;
MyDel delB = SClass.OthreM2;

delA += delB;  // Add Method
MyDel delC = delA + delB; // Group Delegate
delC -= delA;  // Remove Method
```

- The order added is the order invoked.

## invoke Delegate

```c# 
```

## Delegate Return Value

- Return the value of last method

## Anonymous Delegate

```c
delegate int MyDel(int InParam);  // Declare delegate type

MyDel del = delegate(int x) {return x};  // Create delegate instance

del(5);
```

Lambda Expression

```c
MyDel del = (int x) => { return x };  
```

## Predefined Delegate

Action

- no return value

Func

- `Func<TResult>` A Delegate with TResult return type
