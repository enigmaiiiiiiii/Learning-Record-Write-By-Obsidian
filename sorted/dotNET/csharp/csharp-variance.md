# CSharp - Variance

## What It Is

Feature that Enable implicit reference conversion for:

- [array types](#array-type-covariance) 
- [delegate types](#delegate-type-covariance-and-contravariance)
- [generic type arguments](#generic-type-covariance)

When reffering to Variance, There are 2 terms:

- [Covariance](#covariance)
- [Contravariance](#contravariance)

## Array Type Covariance

- array type assignment from derived to base

```cs
object[] objArray = new string[10];
```

## Delegate Type Covariance And Contravariance

- **Covariance**: Delegate **return type** from base to derived
- **Contravariance**: Delegate parameter type from derived to base

```c
class Program
{
    static object GetObject() { return null; }
    static void SetObject(object obj) { }
    
    static string GetString() { return ""; }
    static void SetString(string str) { }

    static void Test()
    {
        // Covariance
        Func<object> f1 = GetString;
        // Contravariance
        Action<string> f2 = SetObject;
    }

}
```

## Generic Type Covariance

```cs
IEnumerable<String> strings = new List<String>();  
IEnumerable<Object> objects = strings;
```

## Invariance

- Means that you can use only the type orginally specified
- Can not assign an instance of `List<Base>` to a variable of type `List<Derived>`


