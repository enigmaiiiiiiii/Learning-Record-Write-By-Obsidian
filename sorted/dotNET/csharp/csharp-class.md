# CSharp - Class

* [Members](#members)
* [Field](#field)
* [Property](#property)
* [Constructor](#constructor)
* [Identifier](#identifier)
* [Inheritance](#inheritance)
* [Instance of Class](#instance-of-class)
* [Record Type](#record-type)

## Members

- [Field](#field)
- [Property](#property)
- [Method](#method)

Static member

- prefix a member with the static keyword
- **static member** and **constant member** are visible to every instance of the class, and can be used without creating an instance of the class

Instance member

- members without the static keyword also known as instance members

Constant Member

- Constants do not have their own storage location; instead, they are directly replaced by the compiler, similar to #define in C++.

## Field

[Field](csharp-class-field.md)

## Property

[Property](csharp-class-properties.md)

readonly

- readonly fields can be assigned a value either at the declaration or in the [constructor]() of the class

```c
public class Person
{
    public readonly string FirstName;
    public readonly string LastName = "Doe";  // assigned at declaration

    public Person(string firstName)
    {
        FirstName = firstName;  // assigned in constructor
    }
}
```

## Constructor

[Constructor](csharp-class-constructor.md)

[Primary Constructor](csharp-primary-constructor.md)

## Method

[Method](csharp-method.md)

## Access Modifier

protected

- Only code in the same class or in a derived class can access this member

## Instance of Class

- Instance of a class is created using the **new** keyword, and the instance is stored in the [heap memory]
- Before using non-static methods, fields, properties, you must create an object instance

## Record Type

- use record type to encapsulating data

```c
public record Person(string FirstName, string LastName);
```

## Partial Classes

- it is possible to split the definition of a class, struct, interface, or method over two or more source files

```c
public partial class Person
{
    public string FirstName { get; set; }
    public string LastName { get; set; }
}

public partial class Person
{
    public string FullName => $"{FirstName} {LastName}";
}
```

