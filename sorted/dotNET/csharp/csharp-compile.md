# CSharp - Compile And Execute

## What Happens When Compile

- `C#` compiler compiles a series of source code files with `.cs` extension into [program set](csharp-programset.md)
- for console program and windows application contains a Main method entry
- the built program set will be saved in `/bin/debug` subdirectory


## Hello World

```cs
using System;
public class Program
{
    public static void Main(string[] args)
    {
        Console.WriteLine("Hello World!");
    }
}
```