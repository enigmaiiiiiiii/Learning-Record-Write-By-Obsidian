# CSharp - Delegate

* [Delegate Declaration](#delegate-declaration)
* [Create Delegate Instance](#create-delegate-instance)
* [Group Delegate](#group-delegate)
* [invoke Delegate](#invoke-delegate)
* [Delegate Return Value](#delegate-return-value)
* [Create Anonymous Delegate](#create-anonymous-delegate)

## What is Delegate

> Delegate can be seen as a type-safe, object-oriented [function pointer](c++-function-pointer.md).

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

## Invoke Delegate

```c
MyDel(5);
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

Returnless Predefined Delegate 

- `Action`, `Action<T>`, `Action<T1, T2, ...>`

Returned Predefined Delegate

- `Func<TResult>`, `Func<T, TResult>`, `Func<T1, T2, ..., TResult>`

## Action

`Action`

- No return value
- No parameter

`Action<T>`

- No return value
- A Delegate with a **single parameter** of type `T`
- `T` is the parameter type

## Func

`Func<TResult>`

- A Delegate with `TResult` **return type**
- No parameter

`Func<T, TResult>`

- A Delegate with `T` **parameter type**
- With One parameter of type `T`



