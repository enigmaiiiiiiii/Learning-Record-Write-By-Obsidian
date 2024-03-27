# CSharp - Class Property

* [Take A Look](#take-a-look)
* [VS Field](#vs-field)
* [Use Property](#use-property)
* [Property and Field](#property-and-field) [readonly and writeonly](#readonly-and-writeonly) [Auto-implemented Property](#auto-implemented-property)
* [Expression-bodied Property](#expression-bodied-property)

## Take A Look

Setter's Features

- with a single implicit value parameter, named `value`, same type as the property
- return type is void

Getter's Features

- no parameter
- with a return type same as the property type
- no `()` when accessed

```c
public class Point
{
    private int x;
    private int y;

    public int X
    {
        get { return x; }
        set { x = value; }
    }

    public int Y
    {
        // ...
    }
}

Point p = new Point();
p.X = 10;
Console.WriteLine(p.X);
```

## VS Field

Similarity

- Named class members
- Can be assigned and read

Difference

- Do not have a storage location
- Execute code when accessed


## Use Property

## Property and Field

Name Convention

- Property use Pascal, for example: FirstName
- Reference field use Camel, for example: firstName

## readonly and writeonly

- writeonly: only set
- readonly: only get

## Auto-implemented Property

- only declare the property, not the field
- only `set;get;` without method body

```c#
class C1
{
    public int MyValue
    {
        set; get;
    }
}
```

## Expression-bodied Property

what's for

- provide a member's(method, property) implementation in a concise

implement Read-only Property

```c#
Property => expression
```

Expression-bodied expression for both getter and setter

```c#
private int x;
public int X
{
    get => x;
    set => x = value;
}
```
