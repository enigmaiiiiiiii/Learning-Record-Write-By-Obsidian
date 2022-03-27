# 创建一个新项目

创建一个`.net6.0`框架下的console项目


```shell
dotnet new console -n microsort.botsay -f net6.0
```

-f: 设置框架

***

得到文件目录:

- obj(文件目录)
- microsoft.botsay.csproj
- Program.cs

## 项目设置文件

microsoft.botsay.csproj项目设置文件, 格式为:

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

- 标签
  - `<TargetFramework>`: 目标框架，可以设置多个框架，用`;`隔开
