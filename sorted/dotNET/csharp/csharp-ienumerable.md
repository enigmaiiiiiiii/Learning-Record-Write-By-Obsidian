## CSharp - IEnumerable Interface

- only one member `GetEnumerator`, a method that returns an [IEnumerator interface](csharp-ienumerator-interface.md) is called an enumerator

## `IEnumerable<T>` And `IDisosable`

- `IEnumerable<T>` inherit `IDisposable`

> by inherit `IDisposable` interface, the enumerator can hold resources like database connection, and can ensure that these resources are released after the enumeration ends (or stops midway)
