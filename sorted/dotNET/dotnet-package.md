# dotNet - Package

## Add Package

## dotnet add package vs nuget install

dotnet add package

- use new .csproj project format
- automatically modifies the project file(e.g. `.csproj`)
- handle package installation and dependency resolution

nuget install

- used both the old .csproj and new .csproj project format
- does not modify the project file
- does not handle dependency resolution automatically

## Example

add `Microsoft.EntityFrameworkCore` NuGet pacakge to project

```sh
dotnet add package Microsoft.EntityFrameworkCore
```

add a specific version of a package to project

```sh
dotnet add ToDo.csproject package Microsoft.Azure.DocumentDB.Core -v 2.11.6
```

add a package using a specific NuGet source

```sh
dotnet add package Microsoft.Azure.DocumentDB.Core --source https://www.nuget.org/api/v2/package
```