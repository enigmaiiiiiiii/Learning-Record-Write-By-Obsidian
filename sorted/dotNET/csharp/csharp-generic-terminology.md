# CSharp - Generic Terminology

* [Type Definition](#type-definition)
* [Type Parameter](#type-parameter)
* [Constructed Generic Type](#constructed-generic-type)
* [Type Arguments](#type-arguments)
* [Constructed Types](#constructed-types)
* [Generic Type Definitions](#generic-type-definitions)
* [Convariance And Contravariance ](#convariance-and-contravariance-)

## Type Definition

- a class, structure, interface

## Type Parameter

- The type that is defined in the type definition

```cs
System.Collections.Generic.Dictionary<TKey, TValue>
```

- `TKey`, `TValue` are type parameters

## Constructed Generic Type

- The **result** of specifying types for the generic definition

## Type Arguments

- substitute for the type parameter

## Convariance And Contravariance 

- Collectively known as **variance**
- For more information, see [Variance](csharp-variance.md)

## Constraints

[Generic Constraint](csharp-generic-constraint.md)

## Generic Method

- Can exist in a generic or non-generic type

```
T MyGenericMethod<T>(T arg)
{
    T temp = arg;
    //...
    return temp;
}
```

