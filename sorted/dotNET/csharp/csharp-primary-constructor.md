# CSharp - Primary Constructor

## What is Primary Constructor

- A constructor whose parameters are available anywhere in the body of the type

```c
public readonly struct Distance(double dx, double dy)
{
    public readonly double Magnitude { get; } = Math.Sqrt(dx * dx + dy * dy);
    public readonly double Direction { get; } = Math.Atan2(dy, dx);
}
```

or

```c
public readonly struct Distance
{
    public readonly double Magnitude { get; }
    public readonly double Direction { get; }

    public Distance(double dx, double dy)
    {
        Magnitude = Math.Sqrt(dx * dx + dy * dy);
        Direction = Math.Atan2(dy, dx);
    }
}
```

## Features

Primary constructor parameters aren't members of the class

- for example, the parameters `dx` can't be accessed as `this.dx`

Primary constructor parameters don't become [properties](csharp-class-properties.md), except in [record types](csharp-class.md#record-type).

The Compiler creates storage for any primary constructors only when that parameter is accessed in the body of a member of your type

```c
public struct Distance(double dx, double dy)
{
    public readonly double Magnitude => Math.Sqrt(dx * dx + dy * dy);
    public readonly double Direction => Math.Atan2(dy, dx);

    public void Translate(double deltaX, double deltaY)
    {
        dx += deltaX;
        dy += deltaY;
    }
}
```

## Common Use Cased

1. Initialize property

2. Create mutable state 

```c
public struct Distance(double dx, double dy)
{
    public readonly double Magnitude => Math.Sqrt(dx * dx + dy * dy);
    public readonly double Direction => Math.Atan2(dy, dx);

    public void Translate(double deltaX, double deltaY)
    {
        dx += deltaX;
        dy += deltaY;
    }

    public Distance() : this(0, 0) {}
}
```

3. Dependency Injection

```c
public interface IService
{
    Distance GetDistance();
}

public class ExampleController(IService service) : Controllerbase
{
    [HttpGet]
    public ActionResult<Distance> Get()
    {
        return service.GetDistance();
    }
}
```

- clearly indicate the dependencies of a class

## Caveats

Constructor In Type With Parameter List Must Have `this` initializer

```c
public class Distance(double dx, double dy)
{
    public readonly double Magnitude => Math.Sqrt(dx * dx + dy * dy);
    public readonly double Direction => Math.Atan2(dy, dx);

    public Distance() : this(0, 0)
    {
        // ...
    }
}
```


