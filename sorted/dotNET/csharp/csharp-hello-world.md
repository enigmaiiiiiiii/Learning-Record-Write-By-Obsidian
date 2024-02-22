# CSharp - Hello World

## Hello World

project structure

```
.
├── Program.cs
└── HelloWorld.csproj
```

`program.cs`

```c
using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Hello World!");
    }
}
```

`HelloWorld.csproj`

```xml
<Project Sdk="Microsoft.NET.Sdk">
  <PropertyGroup>
    <OutputType>Exe</OutputType>
    <TargetFramework>net8.0</TargetFramework>
  </PropertyGroup>
</Project>
```

run following command

```sh
dotnet run
```

## Official Tutorial

[create a new repo](dotnet-create-new-repository.md)
