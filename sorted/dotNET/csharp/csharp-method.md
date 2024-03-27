# CSharp - Method 

## Parameter

Arguments are passed by value by default

When a reference type is passed by value to a method, the method receives a copy of the reference to the class instance.

- Both variables refer to the same object. 
- The parameter is a copy of the reference. 

**The called method can't reassign the instance in the calling method** 

- this will only set the local reference to a new instance, not the original reference
- Or this only changes the local copy **points to**
- modifier `ref` or `out` can be used to change the original reference

```cs
public void Method1(Point point)
{
    // `point` is a local copy of the reference
    point = new Point(10, 10);  // This will not change the original instance
}
```


**However, the called method can use the copy of the reference to access the instance members**

```cs
public void Method2(Point point)
{
    point.X = 10;  // This will change the original instance
}
```

## Method

[extend](csharp-extend-method.md)

