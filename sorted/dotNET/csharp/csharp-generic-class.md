# CSharp - Generic Class

## Terminoloygy

- generic class: `Node<T>`
- closed constructed type: `Node<int>`

## Inheritance

Generic classes can inherit from concrete classes, [closed constructed](), or open constructed base classes

```c++
class BaseNode { }
class BaseNodeGeneric<T> { }

// concrete type
class NodeConcrete<T> : BaseNode { }

//closed constructed type
class NodeClosed<T> : BaseNodeGeneric<int> { }

//open constructed type
class NodeOpen<T> : BaseNodeGeneric<T> { }
```

Supply Not Shared type parameter

```c++
class BaseNodeMultiple<T, U> { }

//No error
// U is not shared, but type argument is supplied
class Node4<T> : BaseNodeMultiple<T, int> { }

// No error
// No Shared type parameter
class Node5<T, U> : BaseNodeMultiple<T, U> { }

// Generates an error
// U is not shared, and type argument is not supplied
//class Node6<T> : BaseNodeMultiple<T, U> {}
```

Non-generic classes can inherit from closed constructed generic classes, not open constructed generic classes

```c++
class Node1: BaseModeGeneric<int> { }

// Generates an error
// class Node2 : BaseNodeGeneric<T> { }

// Generates an error
// class Node3 : T { }
```

inherit from generic class with constraints, must specify constraints that are subset of base type

```cs
class NodeItem<T> where T : System.IComparable<T>, new() { }
class SpecialNodeItem<T> : NodeItem<T> where T : System.IComparable<T>, new() { }
```

multiple constraints

```cs
class SuperKeyType<K, V, U>
    where V : System.IComparable<V>
    where U : new()
{ }
```
