# CSharp - PolyMorphism

## what's for

- Enable to work with groups of related objects in an uniform way

## How to

1. inherit a common base class
2. override a [virtual method]() in the base class
3. through a single call to the base class method, the appropriate method on the derived class is called

## Such as

1. Generic Collections

```c++
public class Shape
{
    // Virtual method
    public virtual void Draw()
    {
        Console.WriteLine("Performing base class drawing tasks");
    }
}

public class Circle : Shape
{
    public override void Draw() { /* Code to draw a circle... */ }
}
public class Triangle : Shape
{
    public override void Draw() { /* Code to draw a triangle... */ }
}

var shapes = new List<Shape>
{
    new Circle(),
    new Triangle()
};
for (int i = 0; i < shapes.Count; i++)
{
    shapes[i].Draw();
}
```

2. **One** Method definition working with **all derived Class** inherited from Same Base Class

```c++
class Program
{
    static void Main()
    {
        Foo(new Circle());
        Foo(new Triangle());
    }

    static void Foo(Shape shape)
    {
        Shape.Draw();
    }
}
```

## VS Implicit Conversion

- [Implicit Conversion](csharp-conversion.md#implicit-conversion) allows assign a **derived class** instance to a **base class** reference
- Polymorphism allows to call a method on a **derived class** instance through a **base class** reference
- So much similarity between each other, Polymorphism is more focus on [virtual method]()

## virtual Method

- Add virtual before the method in the base class, which means the method is **virtual method**
- Exist in base class and relative to base class

