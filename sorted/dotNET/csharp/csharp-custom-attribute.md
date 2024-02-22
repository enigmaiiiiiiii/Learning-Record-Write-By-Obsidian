# CSharp - Custom Attribute

## Define Custom Attribute

```c#
public customAttribute: System.Attribute
{
    private string name;
    public double version;

    public AuthorAttribute(string name)
    {
        this.name = name;
        version = 1.0;
    }

}
```

- just like declaring a class, there are two points to note
  - inherit from `System.Attribute`
  - name ends with Attribute

