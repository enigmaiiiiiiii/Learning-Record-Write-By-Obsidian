# CSharp - Variance

## What It Is

When reffering to Variance, There are 2 terms:

- [Covariance](#covariance)
- [Contravariance](#contravariance)

No variance generic is called:

- [Invariance](#invariance)

## Summary

Where **Covariance** happen 

- generic assignment [implicitly conversion] about type parameters

```cs
IEnumerable<Derived> d = new List<Derived>();
IEnumerable<Base> b = d;
```

- method return type: return type `IEnumerable<Derived>` can be assigned to `IEnumerable<Base>` variable

```cs
class Program
{
    static void Main()
    {
        IEnumerable<Base> list = GetList();
    }

    public List<Derived> GetList()
    {
        return new List<Derived>();
    }
}
```

- type parameter of delegate return type

Where **Contravariance** happen

- delegate parameter type

## Covariance

- Enable to use a more [derived](csharp-inheritance-system.md) type than original specified
- Assign an instance of `IEnumerable<Derived>` to a variable of type `IEnumerable<Base>

```cs
IEnumerable<Derived> d = new List<Derived>();
IEnumerable<Base> b = d;
```

## Contravariance

- Enable to use a **more generic** type than original specified
- Assign an instance of [`Action<Base>`](csharp-delegate.md#action) to a variable of type [`Action<Derived>`](csharp-delegate.md#action)

```cs
Action<Base> b = (target) => { Console.WriteLine(target.GetType().Name); };
Action<Derived> d = b;
d(new Derived());
```

## Invariance

- Means that you can use only the type orginally specified
- Can not assign an instance of `List<Base>` to a variable of type `List<Derived>`

