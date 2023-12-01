# Java - Exception Declaration

> In cases where an **unprocessable situation** is encountered, a method not only needs to return a value but also needs to inform the compiler about what errors might occur, that is, to throw exceptions.

## Declare Exceptions



```java
public void FileInputStream(String name) throws FileNotFoundException
{
    // ...
    throw new FileNotFoundException();
}
```

- with keyword `throws` on the method declaration to declare that the method may throw an exception
- with keyword `throw` to throw an exception, `throw e`
- throw statement will throw the Exception object from the try block to the catch block
- Methods **MUST** declare all possible [checked exceptions](java-checked-and-unchecked-exception.md).
- Multiple exceptions are separated by commas `,`

When a subclass overrides a method of its superclass

- the types of exceptions thrown CANNOT be more general

```java
public class Foo
{
    public void method() throws IOException
    {
        // ...
    }
}

public class SubFoo extends Foo
{
    @Override
    public void method() throws Exception  // compile error
    {
        // ...
    }
}
```
