# dotNET - Create New Repository

## Create Console Project

create a console project under `.net6.0` framework

```shell
dotnet new console -n microsoft.botsay -f net6.0
```

- -f: set frame work(net6.0, net7.0, ...)
- -n: set project name

***

files generated:

- obj
- microsoft.botsay.csproj
- Program.cs

## Project Settings File

`microsoft.botsay.csproj` is project setting file

```xml
<Project Sdk="Microsoft.NET.Sdk">

  <PropertyGroup>
    <OutputType>Exe</OutputType>
    <TargetFramework>net6.0</TargetFramework>
    <ImplicitUsings>enable</ImplicitUsings>
    <Nullable>enable</Nullable>
  </PropertyGroup>

</Project>
```

- `<TargetFramework>`
