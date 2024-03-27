# CSharp - Interface

## Declare Interface

```c
interface IMyInterface
{
    void methodA();
    double methodB(string s, long x);
}
```

## Implement Interface

- must implement all members of the interface

```c
class MyClass: IMyInterface
{
    public void methodA() { ... }
    public double methodB(string s, long x) { ... }
}
```

## Access Interface Members

2 ways to access interface members

force cast

```c

```

as operator

```c

```

## Default Interface Methods

What's for implementing a method in an interface?

- Enable API author to add methods to an interface in future versions without breaking source or binary **compatibility** with existing implementations of that interface
- if a method has a default implementation, it is not enforced to be implemented by the class

Class implementing that interface **Does not** inherit the concrete method

> Which means, you can't call the method from the class instance
> But you can convert the class instance to the interface instance and call the method

```c
interface IPoint
{
    void Foo() { Console.WriteLine("Foo"); }
}
class Point: IPoint { }

Point p = new Point();
p.Foo();  // error

IPoint pi = p;
pi.Foo();  // ok
```

