# CSharp - Inheritance System

## Take A Look

```c
public class Point
{
    public Point(int x, int y)
    {
        this.x = x;
        this.y = y;
    }
}

public class Point3D : Point
{
    public Point3D(int x, int y, int z) : base(x, y)
    {
        this.z = z;
    }
}
```

- when defining a constructor for in `Point`, default constructor will not be generated
- Using `: base(x, y)` to call the base class constructor

## Base Class

## Derived Class

## Keyword override

## Base Class Reference

- Reference to a derived class can be [converted](csharp-conversion.md) to a reference to the base class
- When calling a virtual method on a base class reference converted from a derived class, the **most base-class-closing** **overridden** method in the derived hierarchy is called
