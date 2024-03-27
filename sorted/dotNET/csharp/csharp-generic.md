# CSharp - Generic

## What It Is

> similar to [c++ template](c++-template.md)

## Terminology When Discuss Generics

[Terminology](csharp-generic-terminology.md)

## Features

Advantages

- Type Safety: shift type checking from runtime to compile time
- Less And Reusable Code
- Better Performance
- Generic Delegate enable type-safe callbacks without to creaste multiple delegate classes
- Generic Streamline [Dynamically generated code](csharp-reflection-dynamic-method.md)

Disadvantages(Limitations)

- Do not support ContextBoundObject
- Enumerations cannot be have generic [type parameters](csharp-generic-terminology.md#type-parameter)
- [Lightweight dynamic methods]() cannot be generic
- In VB, C#, C++, a [nested type]() that is enclosed in a generic type cannot be instantiated unless types have been assigned to the [type parameters]() of all enclosing types

## Generic Class

[Generic Class](csharp-generic-class.md)

## Generic Method

```cs
T MyGenericMethod<T>(T arg)
{
    T temp = arg;
    //...
    return temp;
}
```

- Can be declared in a generic or non-generic class, structure, interface
- If parameter type can be inferred, [type parameter](csharp-generic-terminology.md#type-parameter) can be omitted

## Generic Delegate

[Generic Delegate](csharp-generic-delegate.md)

## Generic Constraint

[Generic Constraint](csharp-generic-constraint.md)

## Variance in Generics

[Variance](csharp-generic-variance.md)


